import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from "angularfire2/auth";

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Page } from 'ionic-angular/navigation/nav-util';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:Page = HomePage;
  loginPage:Page = LoginPage;
  registerPage:Page = RegisterPage

  isAuthenticatd: boolean = false;

  @ViewChild('nav') nav : NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private alertCtrl: AlertController, 
    private menuCtrl: MenuController,
    private af:AngularFireAuth) {

    af.authState.subscribe(user => {
      if(user){
        //Logged in
        this.isAuthenticatd = true;
        this.rootPage = HomePage
      } else {
        //Redirect to login page
        this.isAuthenticatd = false;
        this.rootPage = LoginPage
      }
    })

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: Page){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogOut(){
    this.af.auth.signOut();
    this.menuCtrl.close();
  }
}

