import { Component } from '@angular/core';
import { NavController, FabContainer, AlertController, ModalController, LoadingController } from 'ionic-angular';
import {AddEntry} from '../../components/add-entry/add-entry'
import { AddIssuePage } from '../add-issue/add-issue';
import { Geolocation } from '@ionic-native/geolocation'

import { ISubscription } from 'rxjs/Subscription'
import { UserAlertsPage } from '../user-alerts/user-alerts';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  speed = 0;
  isDrive = false;
  alertPage = UserAlertsPage 

  safe_drive_modes: any = [
    {
      text: 'SAFE DRIVE MODE OFF',
      color: 'danger'
    },
    {
      text: 'SAFE DRIVE MODE ON',
      color: 'secondary'
    },
    {
      text: 'CALL BLOCKING MODE OFF',
      color: 'danger'
    }
  ]

  safe_drive_btn: any = this.safe_drive_modes[0];
  watcher:any = null;
  options: any = {
    // timeout: 30000,
    enableHighAccuracy: true
  }
  loader:any;

  constructor(
    public navCtrl: NavController,
    private alertCtrl:AlertController,
    private geoloc: Geolocation,
    private loadCtrl: LoadingController,
    private modalCtrl:ModalController) {

    this.safe_drive_btn = this.safe_drive_modes[0];
    this.loader = loadCtrl.create({
      content: 'Starting Safe Drive Mode...'
    });
  }

  onSafeDriveClick(event){
    if(this.safe_drive_btn.color == 'danger'){
      
      this.loader.present();
      this.startSafeDrive();

    } else if(this.safe_drive_btn.color == 'secondary' || this.safe_drive_btn.color == 'default'){
      this.stopSafeDrive();
      this.safe_drive_btn = this.safe_drive_modes[0];
    }
  }

  startSafeDrive(){
    this.watcher = this.geoloc.watchPosition(this.options).subscribe(loc => {
      if(loc != undefined && !loc['code']){
        if(loc.coords.speed != undefined){
          this.isDrive = true;
          console.log(loc.coords.speed);
          this.speed = Math.round((loc.coords.speed)*3.6);
          this.loader.dismiss();
          this.safe_drive_btn = this.safe_drive_modes[1];
        }
      }
      if(loc['code']){
        this.loader.dismiss();
        this.alertCtrl.create({
          title: 'Error starting drive mode!',
          subTitle: 'Unable to detect vehicle speed',
          buttons: ['OK']
        })
      }
    });
  }

  stopSafeDrive(){
    this.isDrive = false;
    if(this.watcher)
      this.watcher.unsubscribe();
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
