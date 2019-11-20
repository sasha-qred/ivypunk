import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brew, PunkApiService } from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { map, pluck, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-component-with-path-params',
  templateUrl: './request-in-component-with-path-params.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInComponentWithPathParamsContainer {
  public brews$: Observable<Brew[] | null>;
  public params$: Observable<any>;

  constructor(
    private punkApiService: PunkApiService,
    private route: ActivatedRoute,
  ) {
    this.params$ = this.route.params;
    this.brews$ = this.params$.pipe(
      pluck('page'),
      map((page) => Number(page || 1)),
      switchMap((page) => {
        return this.punkApiService.getBeers(page);
      }),
      shareReplay({ refCount: true }),
    );
  }
}
