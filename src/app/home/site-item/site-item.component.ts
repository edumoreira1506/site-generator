import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-item',
  templateUrl: './site-item.component.html',
  styleUrls: ['./site-item.component.scss']
})
export class SiteItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick() {
    alert('onItemClick!')
  }

  onEditButtonClick(event: Event) {
    event.stopPropagation()

    alert('onEditButtonClick!')
  }
}
