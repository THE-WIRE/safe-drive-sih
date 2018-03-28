import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { IonicStorageModule } from '@ionic/storage'
import { IonicSwipeAllModule } from 'ionic-swipe-all'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from 'angularfire2/database'
import { IssueCatPipe } from '../pipes/IssueCat.pipe'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddIssuePage } from '../pages/add-issue/add-issue'
import { UserAlertsPage } from '../pages/user-alerts/user-alerts'

const environment ={
  production:false,
  firebase:{
    apiKey: "AIzaSyBXtKT8C2d53fKzizznKFefOVqC5M46mSw",
    authDomain: "sih-2-3e356.firebaseapp.com",
    databaseURL: "https://sih-2-3e356.firebaseio.com",
    projectId: "sih-2-3e356",
    storageBucket: "sih-2-3e356.appspot.com",
    messagingSenderId: "693586778503"
  }
};

import { AddEntry } from '../components/add-entry/add-entry'
import { SetLocationPage } from '../components/set-location/set-location'


import { AuthService } from '../services/auth'
import { PlacesService } from '../services/places'
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { SMS } from '@ionic-native/sms'

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddEntry,
    SetLocationPage,
    IssueCatPipe,
    AddIssuePage,
    UserAlertsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7lvSpXWaKkxLRS4Sq4EbYuIDuU1OdERk'
    }),
    IonicSwipeAllModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddEntry,
    SetLocationPage,
    AddIssuePage,
    UserAlertsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    PlacesService,
    Geolocation,
    Camera,
    Network,
    SMS,
    AngularFireDatabase
  ]
})
export class AppModule {}
