import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-site-page',
  templateUrl: './edit-site-page.component.html',
  styleUrls: ['./edit-site-page.component.scss'],
})
export class EditSitePageComponent implements OnInit {
  siteId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const siteId = this.route.snapshot.params['id'];

    this.siteId = siteId;
  }
}
