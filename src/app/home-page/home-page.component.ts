import { Component, OnInit } from '@angular/core';
import { RoutePaths } from '../app-routing.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  createSiteRoute: string = RoutePaths.CREATE_PAGE;

  sites = [
    {
      title: 'Site 1',
      description: 'Descrição do site aqui',
      colors: ['black', 'yellow', 'orange', 'red'],
    },
    {
      title: 'Site 2',
      description: 'Descrição do site aqui',
      colors: ['black', 'yellow', 'orange', 'red'],
    },
    {
      title: 'Site 3',
      description: 'Descrição do site aqui',
      colors: ['black', 'yellow', 'orange', 'red'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
