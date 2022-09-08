import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Materialize from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('mobile_sidebar') mobileSidebarElement?: ElementRef;

  @Input() items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    Materialize.Sidenav.init(this.mobileSidebarElement?.nativeElement);
  }
}

type MenuItem = {
  label: string;
  href: string;
};
