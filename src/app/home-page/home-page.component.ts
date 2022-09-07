import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '../app-routing.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  createSiteRoute: string = RoutePaths.CREATE_PAGE;

  constructor() {}

  ngOnInit(): void {}
}
