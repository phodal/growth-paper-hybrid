import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Storage} from '@ionic/storage';
import {JwtHelper} from "angular2-jwt";

@Component({
  selector: 'page-center',
  templateUrl: 'center.html'
})
export class CenterPage {
  public user = {
    name: '',
    password: ''
  };
  public blog = {
    title: '',
    slug: '',
    body: ''
  };
  public isLogin = false;
  public token;
  public jwtHelper = new JwtHelper();

  constructor(public navCtrl: NavController, private http: Http, public storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get('token').then( (token:any) => {
      if(token) {
        this.token = token;
        console.log(this.jwtHelper.getTokenExpirationDate(token));
        if(this.jwtHelper.isTokenExpired(token)){
          this.isLogin = false;
          return;
        }

        this.isLogin = true;
      }
    });
  }

  loginForm() {
    let userInfo = {
      username: this.user.name,
      password: this.user.password
    };

    this.http.post("http://localhost:8000/api-token-auth/", userInfo)
      .map(response => response.json())
      .subscribe(
        data => {
          this.isLogin = true;
          this.token = data["token"];
          this.storage.set('token', data["token"]);
        });
  }

  logout () {
    this.isLogin = false;
    this.storage.remove('token');
  }

  createBlogForm() {
    if(this.jwtHelper.isTokenExpired(this.token)){
      this.isLogin = false;
      return;
    }

    let decodedToken = this.jwtHelper.decodeToken(this.token);

    let blogInfo = {
      author: decodedToken.user_id,
      title: this.blog.title,
      slug: this.blog.slug,
      body: this.blog.body
    };

    let headers = new Headers({ 'Authorization': 'JWT ' + this.token });
    let options = new RequestOptions({ headers: headers });

    this.http.post("http://localhost:8000/api/blog/", blogInfo, options)
      .map(response => response.json())
      .subscribe(
        data => {
          console.log(data);
        });
  }
}
