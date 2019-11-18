import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Brew, PunkApiService } from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-component',
  templateUrl: './request-in-component.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInComponentContainer {
  public brews$: Observable<Brew[] | null>;

  constructor(private punkApiService: PunkApiService) {
    this.brews$ = this.punkApiService
      .getBeers()
      .pipe(shareReplay({ refCount: true }));
  }
}
