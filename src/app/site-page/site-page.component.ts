import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../model';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss'],
  providers: [SiteService],
})
export class SitePageComponent implements OnInit {
  siteId: string = '';

  site?: Site;

  constructor(
    private SiteService: SiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const siteId = this.route.snapshot.params['id'];

    if (siteId) {
      this.SiteService.getById(siteId).subscribe((data) => {
        if (data) {
          this.site = data;
        }
      });
    }
  }
}
