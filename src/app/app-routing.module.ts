import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserRegistrationSuccessComponent} from "./user-registration-success/user-registration-success.component";

const routes: Routes = [{
  path: '',
  component: UserRegistrationComponent
},
  {
    path: 'registration-success',
    loadChildren: () => import('./user-registration-success/user-registration-success.module').then(m=>m.UserRegistrationSuccessModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
