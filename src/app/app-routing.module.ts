import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSitePageComponent } from './create-site-page/create-site-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SitePageComponent } from './site-page/site-page.component';

export const RoutePaths = {
  MAIN: '',
  CREATE_PAGE: 'novo-site',
  VIEW_SITE: 'sites/:id'
};

const routes: Routes = [
  {
    path: RoutePaths.MAIN,
    component: HomePageComponent,
  },
  {
    path: RoutePaths.CREATE_PAGE,
    component: CreateSitePageComponent,
  },
  {
    path: RoutePaths.VIEW_SITE,
    component: SitePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
