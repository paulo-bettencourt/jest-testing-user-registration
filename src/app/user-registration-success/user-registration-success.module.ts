import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRegistrationSuccessComponent} from "./user-registration-success.component";
import {RouterModule, Routes} from "@angular/router";

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
  ]
})
export class UserRegistrationSuccessModule { }
