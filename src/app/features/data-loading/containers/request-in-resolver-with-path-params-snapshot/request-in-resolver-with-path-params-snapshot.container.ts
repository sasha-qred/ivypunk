import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brew } from '@shared/brew-punk';

@Component({
  selector: 'data-loading-request-in-resolver-with-path-params-snapshot',
  templateUrl: './request-in-resolver-with-path-params-snapshot.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInResolverWithPathParamsSnapshotContainer {
  public brewsSnapshot: Brew[];

  constructor(public route: ActivatedRoute) {
    this.brewsSnapshot = route.snapshot.data.brews;
  }
}
