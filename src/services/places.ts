import { Injectable } from "@angular/core";
import { SubPlace} from "../models/subPlace";
import { Location } from "../models/location";
import { SMS } from '@ionic-native/sms'
import { Storage } from '@ionic/storage'
//import { AngularFireAuth } from 'angularfire2/auth'


import firebase from 'firebase'

import { LoadingController, AlertController } from "ionic-angular";

declare var window:{
  PlSMS : any
}

@Injectable()
export class PlacesService {
  

  constructor(private loadCtrl: LoadingController,
              private sms : SMS,
              private storage : Storage,
              private alertCtrl : AlertController,
              // private au : AngularFireAuth
              ) {}

  addPlace(title: string,
           description: string,
           location: Location,
           imageUrl: string,
           isOnline : Boolean,
           category : number ) {
    
    this.storage.get('uid').then(uid=>{

      console.log(uid);
      const newFileName = Math.floor(Date.now() / 1000)+'_';
      const load = this.loadCtrl.create({
        content: 'Submitting your Issue '
      })

      console.log(isOnline);
      
            
      if(isOnline){

        console.log('inside isonline');
        console.log(imageUrl);
        var storageRef = firebase.storage().ref();
        var url = 'issue/'+category+'/'+newFileName +firebase.auth().currentUser.uid+'.jpg'
        var imgref = storageRef.child(url);

        load.present();
        imgref.putString(imageUrl, firebase.storage.StringFormat.DATA_URL).then(snapshot=>{
          
          const place = new SubPlace(uid,title,description,location,snapshot.downloadURL)

          place['category'] = category;
          firebase.database().ref().child('issues/0').push(place).then(data=>{
              load.dismiss();
              console.log(JSON.stringify(data));
              
          })      

        }).catch(err=>{
          this.alertCtrl.create({
            title : 'Something wrong with image upload',
            buttons:['OK']
          }).present();
        })
        
      }

      else if(!isOnline){
          load.present();
          
          // const place = new SubPlace(uid,title,description,location,'');

          const p = {
            a: uid,
            b: title,
            c: description,
            d: {
              e: location.lat,
              f: location.lng
            },
            g: ''
          }

          this.sms.send(description,JSON.stringify(p)).then(data=>{
            load.dismiss();
          }).catch(err=>{
            this.alertCtrl.create({
              title : 'Was not able to send Issue offline, check your SMS setings',
              buttons:['OK']
            }).present();
          })
        
        
        

      }

    }).catch(err=>{

      console.log(JSON.stringify(err));
      this.alertCtrl.create({
        title : 'Try to login again',
        buttons:['OK']
      }).present();
    })
      
  }

  loadPlaces() {
    
  }

  fetchPlaces() {
  
  }

    

  
}
