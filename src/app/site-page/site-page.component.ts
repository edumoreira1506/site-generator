import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../model';
import { SiteStorageService } from '../site-form/site-storage.service';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss'],
  providers: [SiteStorageService],
})
export class SitePageComponent implements OnInit {
  siteId: string = '';

  site?: Site;

  constructor(
    private siteService: SiteStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const siteId = this.route.snapshot.params['id'];

    if (siteId) {
      const site = this.siteService.findById(siteId);

      if (site) {
        this.site = site;
      }
    }
  }
}
