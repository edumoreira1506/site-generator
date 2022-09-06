import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Materialize from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('mobile_sidebar') mobileSidebarElement?: ElementRef;

  title = 'site-generator';

  ngAfterViewInit() {
    Materialize.Sidenav.init(this.mobileSidebarElement?.nativeElement);
  }
}
