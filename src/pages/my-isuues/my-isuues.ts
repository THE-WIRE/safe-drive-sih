import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { IssueDetailsPage } from '../issue-details/issue-details';

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
  issueDetails = IssueDetailsPage

  constructor(public navCtrl: NavController, public navParams: NavParams,private db : AngularFireDatabase,private au : AngularFireAuth) {

   //this.issues = db.list('/issues/0',ref=> ref.orderByChild('uid').equalTo(au.auth.currentUser.uid)).valueChanges()

    db.database.ref('/issues/0').on('value',snapshot=>{
    let data = snapshot.val();
        let dataWithKeys = Object.keys(data).map((key) => {
        var obj = data[key];
        obj._key = key;
        return obj;
   })
   this.issues = dataWithKeys;
   console.log(this.issues)
   
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyIsuuesPage');
  }

  resolve(){
    console.log('inside resolve');
  }
  push(key){
    this.navCtrl.push(IssueDetailsPage,{s_id: key})
  }

}
