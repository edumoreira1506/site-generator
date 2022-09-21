import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesListComponent } from './home/sites-list/sites-list.component';
import { SiteItemComponent } from './home/site-item/site-item.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateSitePageComponent } from './create-site-page/create-site-page.component';
import { SitePageComponent } from './site-page/site-page.component';
import { SiteFormComponent } from './site-form/site-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SitesListComponent,
    SiteItemComponent,
    MenuComponent,
    FooterComponent,
    HomePageComponent,
    CreateSitePageComponent,
    SitePageComponent,
    SiteFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
