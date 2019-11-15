import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { pickBrewFilter } from '../helpers';
import { BrewListFilter } from '../models';

export function selectBrewFilter(): OperatorFunction<
  any,
  Partial<BrewListFilter>
> {
  return map((data) => pickBrewFilter(data));
}
