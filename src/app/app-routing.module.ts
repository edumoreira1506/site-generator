import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSitePageComponent } from './create-site-page/create-site-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const RoutePaths = {
  MAIN: '',
  CREATE_PAGE: 'create',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
