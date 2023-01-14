import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Horoscope} from "../interfaces/horoscope";
import {UserRegisterService} from "../services/user-register.service";
import {Observable} from "rxjs";
import {UserReduxRegisterService} from "../services/redux.service";
import {UserDataService} from "../services/user-redux-data.service";

@Component({
  selector: 'app-user-registration-success',
  templateUrl: './user-registration-success.component.html',
  styleUrls: ['./user-registration-success.component.css']
})
export class UserRegistrationSuccessComponent implements OnInit{

  data: Horoscope = {
    date_range: 'string',
    current_date: 'string',
    description: 'string',
    compatibility: 'string',
    mood: 'string',
    color: 'string',
    lucky_number: 'string',
    lucky_time: 'string'
  };
  userData$: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private userRegisterService: UserReduxRegisterService) {
    this.userData$ = this.userRegisterService.entities$;
    this.userRegisterService.getAll();
    console.log("NGRX", this.userData$)
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data)  => {
      this.data = data['data']
    })
  }

}
