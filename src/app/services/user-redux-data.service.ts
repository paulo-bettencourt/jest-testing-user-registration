import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  EntityCollectionDataService,
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
  QueryParams
} from '@ngrx/data';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Horoscope} from "../interfaces/horoscope";

@Injectable()
export class UserDataService extends DefaultDataService<any> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    super('Hero', http, httpUrlGenerator);
    logger.log('Created custom Hero EntityDataService');
  }

  override getAll(): any {
    return this.http.post<Horoscope>('https://aztro.sameerkumar.website/?sign=aries&day=today', {
      sign: 'aries',
      day: 'today'
    })
  }

  getData(): any {
    return this.http.post<Horoscope>('https://aztro.sameerkumar.website/?sign=aries&day=today', {
      sign: 'aries',
      day: 'today'
    })
  }

}
