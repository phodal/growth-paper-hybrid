import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {
  private blogs;

  constructor(public navCtrl: NavController,public http:Http) {
    let url = 'http://localhost:8000/api/blog/';
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.blogs = data['results'];
      });
  }

}
