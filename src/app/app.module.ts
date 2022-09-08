import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesListComponent } from './home/sites-list/sites-list.component';
import { SiteItemComponent } from './home/site-item/site-item.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateSitePageComponent } from './create-site-page/create-site-page.component';
import { SitePageComponent } from './site-page/site-page.component';

@NgModule({
  declarations: [AppComponent, SitesListComponent, SiteItemComponent, MenuComponent, FooterComponent, HomePageComponent, CreateSitePageComponent, SitePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
