import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {HoroscopeInterface} from "../interfaces/horoscope.interface";

@Component({
  selector: 'app-user-registration-success',
  templateUrl: './user-registration-success.component.html',
  styleUrls: ['./user-registration-success.component.css']
})
export class UserRegistrationSuccessComponent implements OnInit{

  data: HoroscopeInterface = {
    date_range: 'string',
    current_date: 'string',
    description: 'string',
    compatibility: 'string',
    mood: 'string',
    color: 'string',
    lucky_number: 'string',
    lucky_time: 'string'
  };

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data)  => {
      // do something with your resolved data ...
      this.data = data['data'],
      console.log("DATA DO RESOLVER", data)
    })
  }

}
