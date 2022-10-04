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
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss'],
  providers: [SiteService],
})
export class SiteFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  @Input() siteId: Site['id'] = '';

  site!: Site;

  siteComponentIdentifier = Object.values(SiteComponentIdentifier);

  selectedComponentIndex?: number;

  constructor(private siteService: SiteService, private router: Router) {}

  ngOnInit(): void {
    this.site = new Site('', '', '');

    if (this.siteId) {
      this.siteService.getById(this.siteId).subscribe((data) => {
        if (data) {
          this.site = data;
        }
      });
    }
  }

  onSubmit() {
    if (this.site.id) {
      this.siteService.update(this.site).subscribe(() => {
        this.form.reset();
        this.router.navigate([`/${RoutePaths.MAIN}`]);
      });
    } else {
      this.siteService.save(this.site).subscribe(() => {
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

  onMoveComponentIndex(fromIndex: number, toIndex: number) {
    const component = this.site.components[fromIndex];

    this.site.components.splice(fromIndex, 1);
    this.site.components.splice(toIndex, 0, component);
  }
}
