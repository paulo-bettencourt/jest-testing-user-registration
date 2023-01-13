import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationSuccessComponent } from './user-registration-success/user-registration-success.component';
import {UserRegistrationSuccessModule} from "./user-registration-success/user-registration-success.module";

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
