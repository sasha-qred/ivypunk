import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Brew } from '@features/brew-punk/models';

@Component({
  selector: 'brew-punk-list',
  templateUrl: './brew-punk-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewPunkListComponent {
  @Input() public brews: Brew[] | null;

  public trackBrewById(index: number, brew: Brew) {
    return brew.id;
  }
}
