import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'

/**
 * Generated class for the MyIsuuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-isuues',
  templateUrl: 'my-isuues.html',
})
export class MyIsuuesPage {

  issues  : any

  constructor(public navCtrl: NavController, public navParams: NavParams,private db : AngularFireDatabase) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyIsuuesPage');
  }

}
