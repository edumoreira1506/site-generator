import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
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
    return lastValueFrom(this.httpClient.get<Site[]>(this.URL));
  }

  getById(siteId: string) {
    return lastValueFrom(this.httpClient.get<Site>(`${this.URL}/${siteId}`));
  }

  save(site: Site) {
    return lastValueFrom(
      this.httpClient.post<Site>(
        this.URL,
        JSON.stringify(site),
        this.httpOptions
      )
    );
  }

  patch(site: Site) {
    return lastValueFrom(
      this.httpClient.patch<Site>(
        `${this.URL}/${site.id}`,
        JSON.stringify(site),
        this.httpOptions
      )
    );
  }

  update(site: Site) {
    site.updatedAt = new Date();

    return lastValueFrom(
      this.httpClient.put<Site>(
        `${this.URL}/${site.id}`,
        JSON.stringify(site),
        this.httpOptions
      )
    );
  }

  remove(siteId: string) {
    return lastValueFrom(
      this.httpClient.delete<Site>(`${this.URL}/${siteId}`, this.httpOptions)
    );
  }
}
