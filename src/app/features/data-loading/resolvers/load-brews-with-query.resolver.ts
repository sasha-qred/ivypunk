import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Brew, pickBrewFilter, PunkApiService } from '@shared/brew-punk';
import { Observable } from 'rxjs';

@Injectable()
export class LoadBrewsWithQueryResolver implements Resolve<Brew[]> {
  constructor(private punkApiService: PunkApiService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Brew[]> {
    const filter = pickBrewFilter(route.queryParams);
    return this.punkApiService.getBeers(1, filter);
  }
}
