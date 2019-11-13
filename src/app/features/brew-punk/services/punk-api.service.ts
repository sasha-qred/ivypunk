import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Brew } from '../models';

@Injectable()
export class PunkApiService {
  private readonly url = 'https://api.punkapi.com/v2';

  constructor(private http: HttpClient) {}

  public getBeers(page: number = 1): Observable<Brew[]> {
    return this.http.get<Brew[]>(`${this.url}/beers`, {
      params: this.queryStringify({
        page,
      }),
    });
  }

  public getBeerById(id: number): Observable<Brew> {
    return this.http.get<Brew[]>(`${this.url}/beers/${id}`).pipe(pluck(0));
  }

  public getBeerByRandom(): Observable<Brew> {
    return this.http.get<Brew[]>(`${this.url}/beers/random`).pipe(pluck(0));
  }

  protected queryStringify(data: Record<string, any>): Record<string, string> {
    return Object.entries(data).reduce<Record<string, string>>(
      (stringified, [key, rawValue]) => {
        if (rawValue !== null && rawValue !== undefined && rawValue !== '') {
          stringified[key] = String(rawValue);
        }
        return stringified;
      },
      {},
    );
  }
}
