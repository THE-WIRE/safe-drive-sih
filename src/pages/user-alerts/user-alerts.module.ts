import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAlertsPage } from './user-alerts';

@NgModule({
  declarations: [
    UserAlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAlertsPage),
  ],
})
export class UserAlertsPageModule {}
