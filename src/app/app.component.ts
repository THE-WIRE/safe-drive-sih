import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from "angularfire2/auth";

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Storage } from '@ionic/storage'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loginPage:any = LoginPage;
  registerPage:any = RegisterPage

  isAuthenticated: boolean;

  @ViewChild('nav') nav : NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private menuCtrl: MenuController,
    private af:AngularFireAuth,
    private storage : Storage) {

      this.isAuthenticated = false;

    af.authState.subscribe(user => {
      if(user){
        //Logged in
        this.isAuthenticated = true;
        this.rootPage = HomePage
        console.log("Logged In", this.isAuthenticated);
        this.storage.set('uid',user.uid);
      } else {
        //Redirect to login page
        this.isAuthenticated = false;
        this.rootPage = LoginPage;
        console.log("Logged Out", this.isAuthenticated);
      }
    })

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogOut(){
    this.af.auth.signOut();
    this.menuCtrl.close();
  }
}

