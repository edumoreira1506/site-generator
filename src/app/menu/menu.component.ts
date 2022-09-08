import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Materialize from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('mobile_sidebar') mobileSidebarElement?: ElementRef;

  items: { label: string; href: string }[];

  constructor() {
    this.items = [
      {
        label: 'Exemplo 1',
        href: '/rota-1',
      },
    ];
  }
  
  ngOnInit(): void {}

  ngAfterViewInit() {
    Materialize.Sidenav.init(this.mobileSidebarElement?.nativeElement);
  }
}
