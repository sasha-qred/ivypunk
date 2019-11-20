import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brew, PunkApiService } from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-component-with-path-params-snapshot',
  templateUrl:
    './request-in-component-with-path-params-snapshot.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInComponentWithPathParamsSnapshotContainer {
  public brews$: Observable<Brew[] | null>;
  public paramsSnapshot: any;

  constructor(
    private punkApiService: PunkApiService,
    public route: ActivatedRoute,
  ) {
    this.paramsSnapshot = route.snapshot.params;
    this.brews$ = this.punkApiService
      .getBeers(Number(route.snapshot.params.page || 1))
      .pipe(shareReplay({ refCount: true }));
  }
}
