import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrewListFilter } from '../../models';

@Component({
  selector: 'brew-punk-list-filter',
  templateUrl: './brew-punk-list-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewPunkListFilterComponent implements OnChanges {
  @Input() public filter = new EventEmitter<Partial<BrewListFilter>>();
  @Output() public readonly filterChange = new EventEmitter<
    Partial<BrewListFilter>
  >();

  public readonly filterForm = new FormGroup({
    beer_name: new FormControl(),
  });

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.filter) {
      this.formUpdate(changes.filter.currentValue);
    }
  }

  public onSubmit(filterForm: FormGroup) {
    this.filterChange.emit(filterForm.value);
  }

  private formUpdate(nextFilter: Partial<BrewListFilter>) {
    this.filterForm.patchValue(nextFilter);
  }
}
