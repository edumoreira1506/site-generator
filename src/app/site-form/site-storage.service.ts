import { BehaviorSubject } from 'rxjs';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage';
import { Site } from '../model';

@Injectable()
export class SiteStorageService {
  sites!: Site[];

  constructor() {
    this.sites = WebStorageUtil.get(Constants.SITES_KEY) ?? [];
  }

  save(site: Site) {
    this.getSites();

    this.sites.push(site);

    WebStorageUtil.set(Constants.SITES_KEY, this.sites);
  }

  getSites() {
    this.sites = WebStorageUtil.get(Constants.SITES_KEY) ?? [];

    return this.sites;
  }

  delete(siteId: string): boolean {
    this.getSites();

    this.sites = this.sites.filter((s) => {
      return s.id !== siteId;
    });

    WebStorageUtil.set(Constants.SITES_KEY, this.sites);

    return true;
  }

  findById(siteId: string) {
    this.getSites();

    const site = this.sites.find((s) => s.id === siteId);

    return site;
  }

  update(site: Site) {
    this.getSites();
    this.delete(site.id);
    this.save(site);
  }
}
