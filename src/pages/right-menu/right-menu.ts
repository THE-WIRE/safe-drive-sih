import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the RightMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-right-menu',
  templateUrl: 'right-menu.html',
})
export class RightMenuPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RightMenuPage');
  }

  close(){
    this.navCtrl.push(SettingsPage);
    this.viewCtrl.dismiss();
  }

}
