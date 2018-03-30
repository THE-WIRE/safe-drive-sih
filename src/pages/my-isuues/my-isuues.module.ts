import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyIsuuesPage } from './my-isuues';

@NgModule({
  declarations: [
    MyIsuuesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyIsuuesPage),
  ],
})
export class MyIsuuesPageModule {}
