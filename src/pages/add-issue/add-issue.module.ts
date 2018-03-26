import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIssuePage } from './add-issue';

@NgModule({
  declarations: [
    AddIssuePage,
  ],
  imports: [
    IonicPageModule.forChild(AddIssuePage),
  ],
})
export class AddIssuePageModule {}
