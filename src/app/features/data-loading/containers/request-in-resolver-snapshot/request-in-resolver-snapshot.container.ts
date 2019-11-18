import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brew } from '@shared/brew-punk';

@Component({
  selector: 'data-loading-request-in-resolver-snapshot',
  templateUrl: './request-in-resolver-snapshot.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInResolverSnapshotContainer {
  public brews: Brew[];

  constructor(private route: ActivatedRoute) {
    this.brews = this.route.snapshot.data.brews;
  }
}
