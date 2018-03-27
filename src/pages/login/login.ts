import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerPage:any = RegisterPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private af:AngularFireAuth,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignIn(data){
    const loader = this.loadCtrl.create({
      content: 'Signing In. Please Wait...'
    });

    loader.present();
    this.af.auth.signInWithEmailAndPassword(data.email, data.password)
    .then(data => {
      loader.dismiss();
      //Redirect : Currently handled by angularfire

    })
    .catch(error => {
      loader.dismiss();
      //Show errors
      this.alertCtrl.create({
        title: 'Sign In Error!',
        message: error.message,
        buttons: ['OK']
      }).present();
    })
  }

  onLoad(page:any){
    this.navCtrl.setRoot(page);
  }

}
