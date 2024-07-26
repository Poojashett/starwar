import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StarWarserviceService {
  constructor(private http: HttpClient) {}

  getApi(url: any) {
    return this.http.get(url);
  }

  filmsApi(urlfilms: any) {
    return this.http.get(urlfilms);
  }

  speciesApi(urlSpecies: any) {
    return this.http.get(urlSpecies);
  }
  planetsApi(urlPlanets: any) {
    return this.http.get(urlPlanets);
  }
}
