import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePaths } from '../app-routing.module';
import {
  Site,
  SiteComponent,
  SiteComponentIdentifier,
  SiteComponentTemplates,
} from '../model';
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

  siteComponentIdentifier = Object.values(SiteComponentIdentifier);

  selectedComponentIndex?: number;

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

  onAddComponent(event: Event) {
    event.stopPropagation();

    this.site.components.push({
      identifier: SiteComponentIdentifier.Banner,
      metadata: SiteComponentTemplates[SiteComponentIdentifier.Banner],
    });
  }

  onEditComponentType(event: Event, componentIndex: number) {
    this.site.components = this.site.components.map((c, index) => {
      if (index !== componentIndex) return c;

      const componentIdentifier: SiteComponentIdentifier = (event as any).target
        .value;

      return {
        ...c,
        identifier: componentIdentifier,
        metadata: SiteComponentTemplates[componentIdentifier],
      };
    });
  }

  onEditComponent(componentIndex: number) {
    this.selectedComponentIndex = componentIndex;
  }

  onFinishEditComponent(
    componentIndex: number,
    newComponentMetadata: SiteComponent['metadata']
  ) {
    this.site.components = this.site.components.map((c, index) => {
      if (index !== componentIndex) return c;

      return {
        ...c,
        metadata: newComponentMetadata,
      };
    });
    this.selectedComponentIndex = undefined;
  }
}
