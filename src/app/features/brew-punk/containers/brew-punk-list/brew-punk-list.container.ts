import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as BrewActions from '../../actions';
import { Brew } from '../../models';
import { FeatureState } from '../../reducers';
import { selectAllBrews } from '../../selectors';

@Component({
  selector: 'brew-punk-list',
  templateUrl: './brew-punk-list.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewPunkListContainer implements OnInit {
  public readonly brews$: Observable<Brew[]>;

  constructor(private store: Store<FeatureState>) {
    this.brews$ = this.store.select(selectAllBrews);
  }

  public ngOnInit() {
    this.store.dispatch(BrewActions.loadBrews());
  }

  public trackBrewById(index: number, brew: Brew) {
    return brew.id;
  }
}
