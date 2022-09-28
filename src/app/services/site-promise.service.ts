import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Site } from '../model/site';

@Injectable({
  providedIn: 'root',
})
export class SitePromiseService {
  URL = 'http://localhost:3000/sites';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Site[]>(this.URL).toPromise();
  }

  getById(siteId: string) {
    return this.httpClient.get<Site>(`${this.URL}/${siteId}`).toPromise();
  }

  save(site: Site) {
    return this.httpClient
      .post<Site>(this.URL, JSON.stringify(site), this.httpOptions)
      .toPromise();
  }

  patch(site: Site) {
    return this.httpClient
      .patch<Site>(
        `${this.URL}/${site.id}`,
        JSON.stringify(site),
        this.httpOptions
      )
      .toPromise();
  }

  update(site: Site) {
    return this.httpClient
      .put<Site>(
        `${this.URL}/${site.id}`,
        JSON.stringify(site),
        this.httpOptions
      )
      .toPromise();
  }

  remove(siteId: string) {
    return this.httpClient
      .delete<Site>(`${this.URL}/${siteId}`, this.httpOptions)
      .toPromise();
  }
}
