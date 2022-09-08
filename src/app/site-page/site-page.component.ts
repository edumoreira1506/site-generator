import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.scss']
})
export class SitePageComponent implements OnInit {
  siteId: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const siteId = this.route.snapshot.params['id']

    this.siteId = siteId
  }
}
