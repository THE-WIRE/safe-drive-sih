import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'

/**
 * Generated class for the IssueDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-issue-details',
  templateUrl: 'issue-details.html',
})
export class IssueDetailsPage {

  issue_id : any
  issue: any
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
            private db : AngularFireDatabase) {

    this.issue_id = this.navParams.get('s_id');
    console.log(this.issue_id)
   



    this.db.object('issues/0/'+this.issue_id).valueChanges().subscribe(iss=>{

      this.issue = iss
      console.log(this.issue);
    })




  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueDetailsPage');
  }

}
