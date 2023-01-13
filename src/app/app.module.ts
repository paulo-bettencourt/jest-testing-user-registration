import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationSuccessComponent } from './user-registration-success/user-registration-success.component';
import {UserRegistrationSuccessModule} from "./user-registration-success/user-registration-success.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRegistrationGuard} from "./guards/can-activate";

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserRegistrationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
