import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Horoscope} from "../interfaces/horoscope";
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) {}

  getHoroscopeData() {
    return this.http.post<Horoscope>('https://aztro.sameerkumar.website/?sign=aries&day=today', {
      sign: 'aries',
      day: 'today'
    });
  }

}
