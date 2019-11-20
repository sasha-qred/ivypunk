import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Brew,
  BrewListFilter,
  PunkApiService,
  selectBrewFilter,
} from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-component-with-query',
  templateUrl: './request-in-component-with-query.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInComponentWithQueryContainer {
  public brews$: Observable<Brew[] | null>;
  public query$: Observable<any>;

  constructor(
    private punkApiService: PunkApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.query$ = this.route.queryParams;
    const filter$ = this.route.queryParams.pipe(selectBrewFilter());
    this.brews$ = filter$.pipe(
      switchMap((filter) => {
        return this.punkApiService.getBeers(1, filter);
      }),
      shareReplay({ refCount: true }),
    );
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
