import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'helper-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  public isNavClosed: boolean = true;
  public readonly links: Array<{ url: string; label: string }> = [
    {
      label: '1. Request in component',
      url: '/data-loading/request-in-component',
    },
    {
      label: '2. Request in resolver',
      url: '/data-loading/request-in-resolver',
    },
    {
      label: '2. --- Request in resolver snapshot',
      url: '/data-loading/request-in-resolver-snapshot',
    },
    {
      label: '3. Request in component with path params',
      url: '/data-loading/request-in-component-with-path-params/1',
    },
    {
      label: '3. --- Request in component with path params snapshot',
      url: '/data-loading/request-in-component-with-path-params-snapshot/1',
    },
    {
      label: '4. Request in resolver with path params',
      url: '/data-loading/request-in-resolver-with-params/1',
    },
    {
      label: '4. --- Request in resolver with path params snapshot',
      url: '/data-loading/request-in-resolver-with-params-snapshot/1',
    },
    {
      label: '5. Request in component with query',
      url: '/data-loading/request-in-component-with-query',
    },
    {
      label: '5. --- Request in component with query snapshot',
      url: '/data-loading/request-in-component-with-query-snapshot',
    },
    {
      label: '6. Request in resolver with query',
      url: '/data-loading/request-in-resolver-with-query',
    },
    {
      label: '7. Request in resolver with query change',
      url: '/data-loading/request-in-resolver-with-query-change',
    },
    {
      label: '8. Request in resolver with path and query change',
      url: '/data-loading/request-in-with-path-and-query/1',
    },
  ];

  public toggleNav() {
    this.isNavClosed = !this.isNavClosed;
  }

  public trackByUrl(index: number, link: any) {
    return link.url;
  }
}
