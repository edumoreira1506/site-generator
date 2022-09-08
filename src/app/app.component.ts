import { Component } from '@angular/core';
import { RoutePaths } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'site-generator';
  menuItems = [
    {
      label: 'Listar sites',
      href: `/${RoutePaths.MAIN}`,
    },
    {
      label: 'Criar novo site',
      href: `/${RoutePaths.CREATE_PAGE}`,
    },
  ];
}
