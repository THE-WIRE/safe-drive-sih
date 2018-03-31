import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RightMenuPage } from './right-menu';

@NgModule({
  declarations: [
    RightMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(RightMenuPage),
  ],
})
export class RightMenuPageModule {}
