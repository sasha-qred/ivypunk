import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brew } from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-resolver-with-path-params',
  templateUrl: './request-in-resolver-with-path-params.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInResolverWithPathParamsContainer {
  public brews$: Observable<Brew[]>;

  constructor(public route: ActivatedRoute) {
    this.brews$ = route.data.pipe(pluck('brews'));
  }
}
