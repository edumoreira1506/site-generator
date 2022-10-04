import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Site } from 'src/app/model';

@Component({
  selector: 'app-site-item',
  templateUrl: './site-item.component.html',
  styleUrls: ['./site-item.component.scss'],
})
export class SiteItemComponent implements OnInit {
  @Input() colors: Site['colors'] = {
    primary: '#000000',
    secondary: '#000000',
    tertiary: '#000000',
    texts: '#000000',
  };
  @Input() title: Site['title'] = '';
  @Input() description: Site['description'] = '';
  @Input() id: Site['id'] = '';
  @Input() updatedAt: Site['updatedAt'] = new Date();

  @Output() remove = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditButtonClick(event: Event) {
    event.stopPropagation();
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
