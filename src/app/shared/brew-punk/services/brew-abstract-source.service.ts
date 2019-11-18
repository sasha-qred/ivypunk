import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingState } from '../enums';
import { Brew, BrewListFilter } from '../models';

@Injectable()
export abstract class BrewAbstractSourceService {
  public abstract brews$: Observable<Brew[]>;

  public abstract brewsState$: Observable<LoadingState>;

  public abstract loadBrews(
    page: number,
    brewsFilter: Partial<BrewListFilter>,
  ): void;
}
