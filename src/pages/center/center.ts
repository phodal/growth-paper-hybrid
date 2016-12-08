import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Http} from "@angular/http";
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-center',
  templateUrl: 'center.html'
})
export class CenterPage {
  public user = {
    name: '',
    password: ''
  };
  public isLogin = false;

  constructor(public navCtrl: NavController, private http: Http, public storage: Storage) {
    this.storage.get('token').then( (value:any) => {
      if(value.token) {
        console.log(value);
        this.isLogin = true;
      }
    });
  }

  loginForm() {
    let data = {
      username: this.user.name,
      password: this.user.password
    };

    this.http.post("http://localhost:8000/api-token-auth/", data)
      .map(response => response.json())
      .subscribe(
        data => {
          this.isLogin = true;
          this.storage.set('token', data["token"]);
        });
  }
}
