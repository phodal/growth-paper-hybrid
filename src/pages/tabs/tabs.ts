import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import {CenterPage} from "../center/center";
import {BlogListPage} from "../blog-list/blog-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = BlogListPage;
  tab3Root: any = AboutPage;
  tab4Root: any = CenterPage;

  constructor() {

  }
}
