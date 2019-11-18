import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import {
  auditTime,
  map,
  pluck,
  shareReplay,
  skip,
  takeUntil,
} from 'rxjs/operators';
import { LoadingState } from '../../enums';
import { Brew, BrewListFilter } from '../../models';
import { selectBrewFilter } from '../../operators';
import { BrewAbstractSourceService } from '../../services';

@Component({
  selector: 'brew-punk-list-container',
  templateUrl: './brew-punk-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewPunkListContainer implements OnInit, OnDestroy {
  public readonly brews$: Observable<Brew[]>;
  public readonly brewsFilter$: Observable<Partial<BrewListFilter>>;
  public readonly page$: Observable<number>;
  public readonly prevPage$: Observable<number>;
  public readonly nextPage$: Observable<number>;
  public readonly isBrewsLoaded$: Observable<boolean>;

  private readonly destroyEvent$ = new ReplaySubject<true>(1);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private brewSourceService: BrewAbstractSourceService,
  ) {
    this.brews$ = this.brewSourceService.brews$;
    this.brewsFilter$ = this.route.queryParams.pipe(
      selectBrewFilter(),
      shareReplay({ refCount: true }),
    );
    this.isBrewsLoaded$ = this.brewSourceService.brewsState$.pipe(
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
    this.brewSourceService.loadBrews(page, brewsFilter);
  }

  public ngOnDestroy() {
    this.destroyEvent$.next(true);
    this.destroyEvent$.complete();
  }
}
