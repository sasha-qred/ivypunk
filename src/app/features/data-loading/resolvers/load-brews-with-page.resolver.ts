import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Brew, PunkApiService } from '@shared/brew-punk';
import { Observable } from 'rxjs';

@Injectable()
export class LoadBrewsWithPageResolver implements Resolve<Brew[]> {
  constructor(private punkApiService: PunkApiService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Brew[]> {
    const page = Number(route.params.page || 1);
    return this.punkApiService.getBeers(page);
  }
}
