import {Component} from '@angular/core';

import {NavController, Events} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-center',
  templateUrl: 'center.html'
})
export class CenterPage {
  public user = {
    name: '',
    password: ''
  };

  constructor(public navCtrl: NavController, private events: Events, private http: Http) {
    this.events = events;
    this.http = http;
  }

  loginForm() {
    var self = this;
    let data = {
      username: this.user.name,
      password: this.user.password
    };

    this.http.post("http://localhost:8000/api-token-auth/", data)
      .map(response => response.json())
      .subscribe(
        data => {
          self.events.publish("user:login", data);
        },
        error => {
          self.events.publish("user:login:error");
        }
      );
  }
}
