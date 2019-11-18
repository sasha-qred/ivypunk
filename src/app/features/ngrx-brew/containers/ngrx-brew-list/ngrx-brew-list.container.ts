import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  Brew,
  BrewListFilter,
  LoadingState,
  selectBrewFilter,
} from '@shared/brew-punk';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import {
  auditTime,
  map,
  pluck,
  shareReplay,
  skip,
  takeUntil,
} from 'rxjs/operators';
import * as BrewActions from '../../actions';
import { FeatureState } from '../../reducers';
import { selectAllBrews, selectBrewLoadingState } from '../../selectors';

@Component({
  selector: 'ngrx-brew-list-container',
  templateUrl: './ngrx-brew-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxBrewListContainer implements OnInit, OnDestroy {
  public readonly brews$: Observable<Brew[]>;
  public readonly brewsFilter$: Observable<Partial<BrewListFilter>>;
  public readonly page$: Observable<number>;
  public readonly prevPage$: Observable<number>;
  public readonly nextPage$: Observable<number>;
  public readonly isBrewsLoaded$: Observable<boolean>;

  private readonly destroyEvent$ = new ReplaySubject<true>(1);

  constructor(
    private store: Store<FeatureState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.brews$ = this.store.select(selectAllBrews);
    this.brewsFilter$ = this.route.queryParams.pipe(
      selectBrewFilter(),
      shareReplay({ refCount: true }),
    );
    this.isBrewsLoaded$ = this.store.pipe(
      select(selectBrewLoadingState),
      map((status) => LoadingState.LOADING !== status),
    );

    this.page$ = this.route.queryParams.pipe(
      pluck('page'),
      map((stringPage) => Number(stringPage)),
      map((rawPage) => rawPage || 1),
      shareReplay({ refCount: true }),
    );
    this.prevPage$ = this.page$.pipe(
      map((page) => page - 1),
      shareReplay({ refCount: true }),
    );
    this.nextPage$ = this.page$.pipe(
      map((page) => page + 1),
      shareReplay({ refCount: true }),
    );
  }

  public ngOnInit() {
    combineLatest(this.page$, this.brewsFilter$)
      .pipe(skip(1), auditTime(100), takeUntil(this.destroyEvent$))
      .subscribe(([page, brewsFilter]) => {
        this.loadBrews(page, brewsFilter);
      });
  }

  public onFilterChange(brewsFilter: Partial<BrewListFilter>) {
    this.router.navigate([], {
      queryParams: {
        ...brewsFilter,
        page: 1,
      },
      queryParamsHandling: 'merge',
    });
  }

  public loadBrews(page: number, brewsFilter: Partial<BrewListFilter>) {
    this.store.dispatch(BrewActions.loadBrews({ page, brewsFilter }));
  }

  public ngOnDestroy() {
    this.destroyEvent$.next(true);
    this.destroyEvent$.complete();
  }
}
