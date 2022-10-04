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
import { SitePromiseService } from '../services/site-promise.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss'],
  providers: [SitePromiseService],
})
export class SiteFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  @Input() siteId: Site['id'] = '';

  site!: Site;

  siteComponentIdentifier = Object.values(SiteComponentIdentifier);

  selectedComponentIndex?: number;

  constructor(
    private siteService: SitePromiseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.site = new Site('', '', '');

    if (this.siteId) {
      this.siteService.getById(this.siteId).then((site) => {
        if (site) {
          this.site = site;
        }
      });
    }
  }

  onSubmit() {
    if (this.site.id) {
      this.siteService.update(this.site).then(() => {
        this.form.reset();
        this.router.navigate([`/${RoutePaths.MAIN}`]);
      });
    } else {
      this.siteService.save(this.site).then(() => {
        this.form.reset();
        this.router.navigate([`/${RoutePaths.MAIN}`]);
      });
    }
  }

  onAddComponent(event: Event) {
    event.stopPropagation();

    this.site.components.push({
      identifier: SiteComponentIdentifier.Banner,
      metadata: { ...SiteComponentTemplates[SiteComponentIdentifier.Banner] },
    });
  }

  onEditComponent(componentIndex: number) {
    this.selectedComponentIndex = componentIndex;
  }

  onRemoveComponent(componentIndex: number) {
    this.site.components = this.site.components.filter(
      (_, index) => index !== componentIndex
    );
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
