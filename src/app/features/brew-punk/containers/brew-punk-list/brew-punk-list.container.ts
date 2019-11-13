import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import * as BrewActions from '../../actions';
import { Brew, BrewListFilter } from '../../models';
import { selectBrewFilter } from '../../operators';
import { FeatureState } from '../../reducers';
import { selectAllBrews } from '../../selectors';

@Component({
  selector: 'brew-punk-list-container',
  templateUrl: './brew-punk-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewPunkListContainer implements OnInit, OnDestroy {
  public readonly brews$: Observable<Brew[]>;
  public readonly brewsFilter$: Observable<Partial<BrewListFilter>>;

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
  }

  public ngOnInit() {
    this.brewsFilter$
      .pipe(takeUntil(this.destroyEvent$))
      .subscribe((brewsFilter) => {
        this.loadBrews(brewsFilter);
      });
  }

  public onFilterChange(brewsFilter: Partial<BrewListFilter>) {
    this.router.navigate([], {
      queryParams: brewsFilter,
      queryParamsHandling: 'merge',
    });
  }

  public loadBrews(brewsFilter: Partial<BrewListFilter>) {
    this.store.dispatch(BrewActions.loadBrews({ brewsFilter }));
  }

  public ngOnDestroy() {
    this.destroyEvent$.next(true);
    this.destroyEvent$.complete();
  }
}
