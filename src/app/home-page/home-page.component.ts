import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '../app-routing.module';
import { Site } from '../model';
import { SiteStorageService } from '../site-form/site-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [SiteStorageService],
})
export class HomePageComponent implements OnInit {
  createSiteRoute: string = RoutePaths.CREATE_PAGE;

  sites: Site[] = [];

  constructor(private siteService: SiteStorageService) {
    this.sites = this.siteService.getSites();
  }

  ngOnInit(): void {}

  removeSite() {
    alert('removeSite!');
  }
}
