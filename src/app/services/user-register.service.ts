import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HoroscopeInterface} from "../interfaces/horoscope.interface";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) { }

  getHoroscopeData() {
    return this.http.post<HoroscopeInterface>('https://aztro.sameerkumar.website/?sign=aries&day=today', {
      sign: 'aries',
      day: 'today'
    });
  }

}
