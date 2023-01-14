import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserRegisterService} from "../services/user-register.service";
import {Horoscope} from "../interfaces/horoscope";

@Injectable({ providedIn: 'root' })
export class UserRegisterResolver implements Resolve<any> {
  constructor(private service: UserRegisterService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Horoscope>|Promise<Horoscope>|any {

    return this.service.getHoroscopeData();

  }
}
