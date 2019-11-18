import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Event, Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import {
  delayWhen,
  filter,
  first,
  pluck,
  scan,
  switchMap,
  window,
} from 'rxjs/operators';

@Component({
  selector: 'helper-router-events',
  templateUrl: './router-events.component.html',
  styleUrls: ['./router-events.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterEventsComponent {
  public readonly eventsHistory$: Observable<string[]>;

  constructor(router: Router) {
    const events$ = router.events.pipe(
      pluck<Event, string>('constructor', 'name'),
    );

    const scrollEvent$ = events$.pipe(
      filter((eventName) => eventName === 'Scroll'),
    );

    this.eventsHistory$ = events$.pipe(
      window(scrollEvent$),
      switchMap((eventName$) => {
        return eventName$.pipe(
          scan((history, eventName) => [eventName, ...history], []),
        );
      }),
      delayWhen((events) => interval((events.length - 1) * 250).pipe(first())),
    );
  }

  public trackByEvent(event: string) {
    return event;
  }
}
