import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Brew,
  BrewListFilter,
  pickBrewFilter,
  PunkApiService,
} from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-component-with-query',
  templateUrl: './request-in-component-with-query-snapshot.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInComponentWithQuerySnapshotContainer {
  public brews$: Observable<Brew[] | null>;
  public querySnapshot: any;

  constructor(
    private punkApiService: PunkApiService,
    public route: ActivatedRoute,
    private router: Router,
  ) {
    this.querySnapshot = route.snapshot.queryParams;
    const filter = pickBrewFilter(route.snapshot.queryParams);
    this.brews$ = this.punkApiService
      .getBeers(1, filter)
      .pipe(shareReplay({ refCount: true }));
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
