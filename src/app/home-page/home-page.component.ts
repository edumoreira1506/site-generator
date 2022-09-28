import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '../app-routing.module';
import { Site } from '../model';
import { SitePromiseService } from '../services/site-promise.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [SitePromiseService],
})
export class HomePageComponent implements OnInit {
  createSiteRoute: string = RoutePaths.CREATE_PAGE;

  sites: Site[] = [];

  constructor(private siteService: SitePromiseService) {
    this.siteService.getAll().then((sites) => {
      this.sites = sites ?? [];
    });
  }

  ngOnInit(): void {}

  removeSite(siteId: string) {
    this.siteService.remove(siteId).then(() => {
      this.siteService.getAll().then((sites) => {
        this.sites = sites ?? [];
      });
    });
  }
}
