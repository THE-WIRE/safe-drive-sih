import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Drive Mode ON") {
        x.innerHTML = "Drive Mode OFF";
    } else {
        x.innerHTML = "Drive Mode ON";
    }
}

}
