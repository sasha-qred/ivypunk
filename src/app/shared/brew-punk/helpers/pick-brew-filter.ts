import { BrewListFilter } from '../models';

export function pickBrewFilter(data: any): Partial<BrewListFilter> {
  return {
    beer_name: data.beer_name && String(data.beer_name),
  };
}
