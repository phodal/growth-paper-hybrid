import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mySlideOptions = {
    pager:true,
    speed: 7000,
    autoplay: 1000,
    loop: true
  };

  constructor(public navCtrl: NavController) {

  }

}
