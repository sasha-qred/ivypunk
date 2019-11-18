import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { merge, Observable, of } from 'rxjs';
import { delay, filter, first, map } from 'rxjs/operators';
import { LoadingState } from '../enums';
import { pickBrewFilter } from '../helpers';
import { BrewAbstractSourceService } from '../services';

@Injectable()
export class LoadBrewsGuard implements CanActivate {
  constructor(private brewSourceService: BrewAbstractSourceService) {}

  public canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const page = route.queryParams.page;
    const brewsFilter = pickBrewFilter(route.queryParams);
    this.brewSourceService.loadBrews(page, brewsFilter);
    return merge(
      of(true).pipe(delay(500)),
      this.brewSourceService.brewsState$.pipe(
        filter(
          (status) =>
            status === LoadingState.LOADED || status === LoadingState.ERROR,
        ),
        map((status) => LoadingState.LOADED === status),
      ),
    ).pipe(first());
  }
}
