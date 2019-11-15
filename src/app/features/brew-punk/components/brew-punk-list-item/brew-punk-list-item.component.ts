import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Brew } from '../../models';

@Component({
  selector: 'brew-punk-list-item',
  templateUrl: './brew-punk-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewPunkListItemComponent {
  @Input() public brew: Brew;
}
