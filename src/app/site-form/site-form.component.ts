import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from '../app-routing.module';
import { Site } from '../model';
import generateFakeId from '../util/generate-fake-id';
import { SiteStorageService } from './site-storage.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss'],
  providers: [SiteStorageService],
})
export class SiteFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  @Input() siteId: Site['id'] = '';

  site!: Site;

  constructor(
    private siteService: SiteStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.site = new Site('', '', generateFakeId());

    if (this.siteId) {
      const site = this.siteService.findById(this.siteId);

      if (site) {
        this.site = site;
      }
    }
  }

  onSubmit() {
    if (this.site.id) {
      this.siteService.update(this.site);
    } else {
      this.siteService.save(this.site);
    }
    this.form.reset();
    this.router.navigate([`/${RoutePaths.MAIN}`]);
  }
}
