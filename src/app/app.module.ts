import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesListComponent } from './home/sites-list/sites-list.component';
import { SiteItemComponent } from './home/site-item/site-item.component';

@NgModule({
  declarations: [AppComponent, SitesListComponent, SiteItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
