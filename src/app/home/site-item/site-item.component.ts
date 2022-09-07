import { Component, Input, OnInit } from '@angular/core';

export type SiteItem = {
  title: string;
  description: string;
  colors: string[];
};

@Component({
  selector: 'app-site-item',
  templateUrl: './site-item.component.html',
  styleUrls: ['./site-item.component.scss'],
})
export class SiteItemComponent implements OnInit {
  @Input() colors: SiteItem['colors'] = [];
  @Input() title: SiteItem['title'] = '';
  @Input() description: SiteItem['description'] = '';

  constructor() {}

  ngOnInit(): void {}

  onItemClick() {
    alert('onItemClick!');
  }

  onEditButtonClick(event: Event) {
    event.stopPropagation();

    alert('onEditButtonClick!');
  }

  onRemoveButtonClick(event: Event) {
    event.stopPropagation();

    alert('onRemoveButtonClick!');
  }
}
