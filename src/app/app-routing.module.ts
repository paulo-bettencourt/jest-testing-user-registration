import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserRegistrationSuccessComponent} from "./user-registration-success/user-registration-success.component";
import {UserRegistrationGuard} from './guards/can-activate'
const routes: Routes = [{
  path: '',
  component: UserRegistrationComponent
},
  {
    path: 'registration-success',
    loadChildren: () => import('./user-registration-success/user-registration-success.module').then(m=>m.UserRegistrationSuccessModule),
    canActivate: [UserRegistrationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    UserRegistrationGuard
  ]
})
export class AppRoutingModule { }
