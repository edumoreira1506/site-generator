import { Component, Input, OnInit } from '@angular/core';
import { Site, SiteComponent, SiteComponentIdentifier } from '../model';

@Component({
  selector: 'app-site-component',
  templateUrl: './site-component.component.html',
  styleUrls: ['./site-component.component.scss'],
})
export class SiteComponentComponent implements OnInit {
  @Input() identifier: SiteComponent['identifier'] =
    SiteComponentIdentifier.Banner;
  @Input() metadata: SiteComponent['metadata'] = {};
  @Input() site: Site = new Site('', '', '');

  constructor() {}

  ngOnInit(): void {}
}
