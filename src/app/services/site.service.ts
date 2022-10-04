import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Site } from '../model/site';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  URL = 'http://localhost:3000/sites';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Site[]>(this.URL, this.httpOptions);
  }

  getById(siteId: string) {
    return this.httpClient.get<Site>(`${this.URL}/${siteId}`, this.httpOptions);
  }

  save(site: Site) {
    return this.httpClient.post<Site>(this.URL, site, this.httpOptions);
  }

  update(site: Site) {
    site.updatedAt = new Date();

    return this.httpClient.put<Site>(
      `${this.URL}/${site.id}`,
      site,
      this.httpOptions
    );
  }

  remove(siteId: string) {
    return this.httpClient.delete<Site>(
      `${this.URL}/${siteId}`,
      this.httpOptions
    );
  }
}
