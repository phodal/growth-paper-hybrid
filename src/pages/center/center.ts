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

  constructor(public navCtrl: NavController, private http: Http, public storage: Storage) {

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
          this.storage.set('token', data["token"]);
        });
  }
}
