import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { BbsComponent } from './bbs/bbs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    NewsComponent,
    WorksComponent,
    ContactComponent,
    BbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
