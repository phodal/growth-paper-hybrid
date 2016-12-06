import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {BlogDetailPage} from "../blog-detail/blog-detail";

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {
  private blogs;
  private hasNext = false;
  private nextUrl = '';

  constructor(public navCtrl: NavController, public http: Http) {
    let url = 'http://localhost:8000/api/blog/';
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.hasNext = false;
        if (data['next'] !== null) {
          this.hasNext = true;
          this.nextUrl = data['next'];
        }
        this.blogs = data['results'];
      });
  }

  doInfinite(infiniteScroll) {
    this.http.get(this.nextUrl)
      .map(res => res.json())
      .subscribe(data => {
        this.hasNext = false;
        if (data['next'] !== null) {
          this.hasNext = true;
          this.nextUrl = data['next'];
        }
        for (var i = 0; i < data['results'].length; i++) {
          this.blogs.push(data['results'][i]);
        }
        infiniteScroll.complete();
      });
  }

  gotoBlogDetail(blogId) {
    this.navCtrl.push(BlogDetailPage, {
      blogId: blogId
    });
  }

}
