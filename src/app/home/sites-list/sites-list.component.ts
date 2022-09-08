import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SiteItem } from '../site-item/site-item.component';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss'],
})
export class SitesListComponent implements OnInit {
  @Input() sites: SiteItem[] = [];

  @Output() removeItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
