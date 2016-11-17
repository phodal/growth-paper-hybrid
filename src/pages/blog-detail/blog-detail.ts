import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html'
})
export class BlogDetailPage {
  private blog;

  constructor(public navCtrl: NavController,public http:Http, public navParams:NavParams) {
    let blogId = navParams["data"]["blogId"];
    let url = 'http://localhost:8000/api/blog/' + blogId + '/';
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.blog = data;
      });
  }
}
