import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../model';
import { SitePromiseService } from '../services/site-promise.service';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss'],
  providers: [SitePromiseService],
})
export class SitePageComponent implements OnInit {
  siteId: string = '';

  site?: Site;

  constructor(
    private sitePromiseService: SitePromiseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const siteId = this.route.snapshot.params['id'];

    if (siteId) {
      this.sitePromiseService.getById(siteId).then((site) => {
        if (site) {
          this.site = site;
        }
      });
    }
  }
}
