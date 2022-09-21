import { Component, OnInit, ViewChild } from '@angular/core';
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

  site!: Site;

  constructor(
    private siteService: SiteStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.site = new Site('', '', generateFakeId());
  }

  onSubmit() {
    this.siteService.save(this.site);
    this.form.reset();
    this.router.navigate([`/${RoutePaths.MAIN}`]);
  }
}
