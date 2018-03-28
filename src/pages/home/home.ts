import { Component } from '@angular/core';
import { NavController, FabContainer, AlertController, ModalController } from 'ionic-angular';
import {AddEntry} from '../../components/add-entry/add-entry'
import { AddIssuePage } from '../add-issue/add-issue';
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
    this.navCtrl.push(AddIssuePage,{category:1 , isModal : false})
    console.log('clicked '+addto);
  }

  addMaintainence(addto:string,fab:FabContainer){
    fab.close();
    this.navCtrl.push(AddIssuePage,{category:2 , isModal : false})
    console.log('clicked '+addto);
  }

  addAccident(addto:string,fab:FabContainer){
    fab.close();
    this.navCtrl.push(AddIssuePage,{category:0 , isModal : false})
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
      this.modalCtrl.create(AddEntry,{category:0 , isModal : true}).present()
  }

swipeDown(event: any): any {
    console.log('Swipe Down', event);
}

}
