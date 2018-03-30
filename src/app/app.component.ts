import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from "angularfire2/auth";

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Storage } from '@ionic/storage'
import { LocalNotifications } from '@ionic-native/local-notifications'

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
    private storage : Storage,
    private notify : LocalNotifications
  ) {

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
      
      this.notify.hasPermission().then(done=>{
        console.log('app has permission');
      },
      reject=>{
        this.notify.requestPermission().then(accept=>{
          console.log('Request Accepted');
        },
        rej=>{
          console.log('user has resyricted');
        }
      
      )
      }
    )



      
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

