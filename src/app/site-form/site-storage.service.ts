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
    this.sites = WebStorageUtil.get(Constants.SITES_KEY) ?? [];
    this.sites.push(site);

    WebStorageUtil.set(Constants.SITES_KEY, this.sites);
  }
}
