import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { NgForm } from "@angular/forms";
import { LoginPage } from '../login/login';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loginPage:any = LoginPage;

  cities: String[] = [
    'Mumbai', 'Delhi', 'Kolkata', 'Kashmir', 'Karachi'
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private af:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onSignUp(data){
    const loader = this.loadCtrl.create({
      content: 'Creating your account. Please Wait...'
    });
    loader.present();

    this.af.auth.createUserWithEmailAndPassword(data.email, data.password)
    .then(success => {
      //Entry in Database
      loader.dismiss();
      data.password = null;
      data['role'] = 0;
      firebase.database().ref('users/'+success.uid).set(data)
    })
    .catch(error => {
      loader.dismiss();
      this.alertCtrl.create({
        title: 'Sign Up Error',
        subTitle: error.message,
        buttons: ['OK']
      }).present();
    });
  }

  onLoad(page:any){
    this.navCtrl.setRoot(page);
  }
}
