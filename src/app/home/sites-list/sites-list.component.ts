import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Site } from 'src/app/model';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.scss'],
})
export class SitesListComponent implements OnInit {
  @Input() sites: Site[] = [];

  @Output() removeItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
