import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {BlogPage} from "../pages/blog/blog";
import {BlogDetailPage} from "../pages/blog-detail/blog-detail";
import {CenterPage} from "../pages/center/center";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BlogPage,
    BlogDetailPage,
    HomePage,
    CenterPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BlogPage,
    BlogDetailPage,
    HomePage,
    CenterPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
