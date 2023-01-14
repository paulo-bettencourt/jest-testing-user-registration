import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRegistrationGuard} from "./guards/can-activate";
import {HttpClientModule} from "@angular/common/http";
import {entityConfig} from "./store/entity-metadata";
import {DefaultDataServiceConfig, EntityDataModule} from "@ngrx/data";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {UserRegisterService} from "./services/user-register.service";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {UserReduxRegisterService} from "./services/redux.service";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://aztro.sameerkumar.website/',
  timeout: 3000, // request timeout
}

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [UserRegistrationGuard, { provide: DefaultDataServiceConfig, useValue:    defaultDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
