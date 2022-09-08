import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type SiteItem = {
  title: string;
  description: string;
  colors: string[];
  id: string;
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
  @Input() id: SiteItem['id'] = '';

  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditButtonClick(event: Event) {
    event.stopPropagation();

    alert('onEditButtonClick!');
  }

  onRemoveButtonClick(event: Event) {
    event.stopPropagation();

    const confirmRemove = window.confirm(
      'Tem certeza que deseja excluir o site?'
    );

    if (confirmRemove) {
      this.remove.emit();
    }
  }
}
