import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brew, BrewListFilter, selectBrewFilter } from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-resolver-with-query',
  templateUrl: './request-in-resolver-with-query.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInResolverWithQueryContainer {
  public brews$: Observable<Brew[] | null>;
  public filter$: Observable<Partial<BrewListFilter>>;
  public query$: Observable<any>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.brews$ = this.route.data.pipe(pluck('brews'));
    this.query$ = this.route.queryParams;
    this.filter$ = this.route.queryParams.pipe(selectBrewFilter());
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
