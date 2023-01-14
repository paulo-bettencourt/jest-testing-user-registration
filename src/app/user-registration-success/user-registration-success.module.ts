import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRegistrationSuccessComponent} from "./user-registration-success.component";
import {RouterModule, Routes} from "@angular/router";
import {UserRegistrationGuard} from "../guards/can-activate";
import {EntityDataService} from "@ngrx/data";
import {UserDataService} from "../services/user-redux-data.service";

const routes: Routes = [
  {
    path: '',
    component: UserRegistrationSuccessComponent
  }
];

@NgModule({
  declarations: [
    UserRegistrationSuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserRegistrationGuard,
    UserDataService
  ]
})
export class UserRegistrationSuccessModule {
  constructor(entityDataService: EntityDataService,
              userDataService: UserDataService,
  ) {
    entityDataService.registerService('UserRegister', userDataService); // <-- register it
  }
}
