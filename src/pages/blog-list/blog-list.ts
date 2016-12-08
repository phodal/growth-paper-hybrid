import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {BlogDetailPage} from "../blog-detail/blog-detail";

@Component({
  selector: 'page-blog-list',
  templateUrl: 'blog-list.html'
})
export class BlogListPage {
  public blogs;

  constructor(public navCtrl: NavController, public http: Http) {
    let url = 'http://localhost:8000/api/blog/';
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.blogs = data;
      });
  }

  gotoBlogDetail(blogId) {
    this.navCtrl.push(BlogDetailPage, {
      blogId: blogId
    });
  }
}
