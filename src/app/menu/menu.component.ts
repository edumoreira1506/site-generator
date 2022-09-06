import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Materialize from 'materialize-css';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('mobile_sidebar') mobileSidebarElement?: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    Materialize.Sidenav.init(this.mobileSidebarElement?.nativeElement);
  }
}
