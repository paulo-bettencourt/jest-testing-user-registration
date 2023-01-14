import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from "@ngrx/data";

@Injectable({
  providedIn: 'root'
})
export class UserReduxRegisterService extends EntityCollectionServiceBase<any>  {

  constructor(private http: HttpClient, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('UserRegister', serviceElementsFactory);
  }

}
