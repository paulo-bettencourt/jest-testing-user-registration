import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('AirlineRegister', 'true');
    this.router.navigate(['registration-success']);
  }
}
