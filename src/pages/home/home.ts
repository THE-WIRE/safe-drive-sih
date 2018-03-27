import { Component } from '@angular/core';
import { NavController, FabContainer, AlertController, ModalController } from 'ionic-angular';
import {AddEntry} from '../../components/add-entry/add-entry'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private alertCtrl:AlertController,
              private modalCtrl:ModalController) {

  }

  addAccProne(addto:string,fab:FabContainer){
    fab.close();
    console.log('clicked '+addto);
  }

  addMaintainence(addto:string,fab:FabContainer){
    fab.close();
    console.log('clicked '+addto);
  }

  addAccident(addto:string,fab:FabContainer){
    fab.close();
    console.log('clicked '+addto);
  }

  swipeAll(event: any): any {
    console.log('Swipe All', event);
}

  swipeLeft(event: any): any {
      console.log('Swipe Left', event);
  }

  swipeRight(event: any): any {
      console.log('Swipe Right', event);
  }

  swipeUp(event: any): any {
     
      console.log('Swipe Up', event);
      this.modalCtrl.create(AddEntry,{isModal:true}).present()
  }

swipeDown(event: any): any {
    console.log('Swipe Down', event);
}

}
