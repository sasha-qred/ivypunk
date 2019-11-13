import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrewListFilter } from '../models';

export function selectBrewFilter(): OperatorFunction<
  any,
  Partial<BrewListFilter>
> {
  return map((data) => {
    return {
      beer_name: data.beer_name && String(data.beer_name),
    };
  });
}
