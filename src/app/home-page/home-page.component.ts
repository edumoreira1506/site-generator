import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '../app-routing.module';
import { Site } from '../model';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [SiteService],
})
export class HomePageComponent implements OnInit {
  createSiteRoute: string = RoutePaths.CREATE_PAGE;

  sites: Site[] = [];

  constructor(private siteService: SiteService) {
    this.siteService.getAll().subscribe((data) => {
      this.sites = data ?? [];
    });
  }

  ngOnInit(): void {}

  removeSite(siteId: string) {
    this.siteService.remove(siteId).subscribe(() => {
      this.siteService.getAll().subscribe((data) => {
        this.sites = data ?? [];
      });
    });
  }
}
