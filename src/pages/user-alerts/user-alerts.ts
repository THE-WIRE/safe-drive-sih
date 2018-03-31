import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { Storage } from '@ionic/storage'
import firebase from 'firebase'
/**
 * Generated class for the UserAlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-alerts',
  templateUrl: 'user-alerts.html',
})
export class UserAlertsPage {

  Locations: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private db : AngularFireDatabase,
              private storage : Storage) {

      storage.get('uid').then(data=>{
          console.log(data);

          
        db.list('users/'+data+'/alerts').valueChanges().subscribe(issues=>{
             this.Locations = []
             issues.forEach(element => {
               console.log(element)
              firebase.database().ref('issues/'+element['category']+'/'+element['issue_id']).on('value',data=>{
                console.log(data.val())
                this.Locations.push(data.val())
              })
             });
              
          
        })

      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAlertsPage');
  }

}
