import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) { }

  getHoroscopeData() {
    return this.http.post<any>('https://aztro.sameerkumar.website/?sign=aries&day=today', {
      sign: 'aries',
      day: 'today'
    });
  }

}
