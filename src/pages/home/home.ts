import { Component } from '@angular/core';
import { NavController, FabContainer, AlertController, ModalController } from 'ionic-angular';
import {AddEntry} from '../../components/add-entry/add-entry'
import { AddIssuePage } from '../add-issue/add-issue';
import { Geolocation } from '@ionic-native/geolocation'

import { ISubscription } from 'rxjs/Subscription'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isDrive : boolean = false;
  speed = 0;
  watch : ISubscription;
  constructor(public navCtrl: NavController,
              private alertCtrl:AlertController,
              private modalCtrl:ModalController,
              private geoloc : Geolocation) {

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

  toggleDrive(event){
    if(event.checked){
      this.watch = this.geoloc.watchPosition({
        timeout: 30000,
        enableHighAccuracy: true
        }).subscribe(loc=>{
        this.speed = Math.round((loc.coords.speed)/1000);
        console.log(this.speed);

      },err=>{
        console.log('something went wrong')
      })    
    }
    else{
      this.watch.unsubscribe();
    }
  }
}
