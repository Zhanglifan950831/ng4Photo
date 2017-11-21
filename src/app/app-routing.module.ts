import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {NewsComponent} from './news/news.component';
import {WorksComponent} from './works/works.component';
import {ContactComponent} from './contact/contact.component';
import {BbsComponent} from './bbs/bbs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'bbs',
    component: BbsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
