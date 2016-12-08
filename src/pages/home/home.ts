import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mySlideOptions = {
    pager:true,
    speed: 4000,
    autoplay: true,
    loop: true
  };

  constructor(public navCtrl: NavController) {

  }

}
