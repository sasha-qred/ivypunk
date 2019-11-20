import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Brew,
  BrewListFilter,
  PunkApiService,
  selectBrewFilter,
} from '@shared/brew-punk';
import { merge, Observable } from 'rxjs';
import {
  pluck,
  shareReplay,
  skip,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-with-path-and-query',
  templateUrl: './request-with-path-and-query.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestWithPathAndQueryContainer {
  public brews$: Observable<Brew[] | null>;
  public page$: Observable<number>;
  public filter$: Observable<Partial<BrewListFilter>>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private punkApiService: PunkApiService,
  ) {
    this.page$ = this.route.params.pipe(pluck('page'));
    this.filter$ = this.route.queryParams.pipe(
      selectBrewFilter(),
      shareReplay({ refCount: true }),
    );
    this.brews$ = merge(
      this.route.data.pipe(pluck('brews')),
      this.filter$.pipe(
        skip(1),
        selectBrewFilter(),
        withLatestFrom(this.page$),
        switchMap(([filter, page]) =>
          this.punkApiService.getBeers(page, filter),
        ),
      ),
    ).pipe(shareReplay({ refCount: true }));
  }

  public onFilterChange(brewsFilter: Partial<BrewListFilter>) {
    this.router.navigate([], {
      queryParams: {
        ...brewsFilter,
      },
      queryParamsHandling: 'merge',
    });
  }
}
