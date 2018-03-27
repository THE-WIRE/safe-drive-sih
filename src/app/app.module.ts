import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { IonicStorageModule } from '@ionic/storage'
import { IonicSwipeAllModule } from 'ionic-swipe-all'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

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
    AddEntry,
    SetLocationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
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
    AddEntry,
    SetLocationPage
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
    SMS
  ]
})
export class AppModule {}
