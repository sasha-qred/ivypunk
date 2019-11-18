import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Brew, PunkApiService } from '@shared/brew-punk';
import { Observable } from 'rxjs';

@Injectable()
export class LoadBrewsResolver implements Resolve<Brew[]> {
  constructor(private punkApiService: PunkApiService) {}

  public resolve(): Observable<Brew[]> {
    return this.punkApiService.getBeers();
  }
}
