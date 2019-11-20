import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brew } from '@shared/brew-punk';
import { Observable } from 'rxjs';
import { pluck, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'data-loading-request-in-resolver',
  templateUrl: './request-in-resolver.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInResolverContainer {
  public brews$: Observable<Brew[] | null>;

  constructor(private route: ActivatedRoute) {
    this.brews$ = this.route.data.pipe(pluck('brews'));
  }
}
