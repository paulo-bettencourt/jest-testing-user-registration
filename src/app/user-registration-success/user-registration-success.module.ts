import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRegistrationSuccessComponent} from "./user-registration-success.component";
import {RouterModule, Routes} from "@angular/router";
import {UserRegistrationGuard} from "../guards/can-activate";

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
    UserRegistrationGuard
  ]
})
export class UserRegistrationSuccessModule { }
