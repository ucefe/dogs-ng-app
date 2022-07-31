import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {DogService} from "./dog.service";
import {BreedResponse} from "../commun/models";

@Injectable({
  providedIn: 'root'
})
export class SideBarResolver implements Resolve<any> {
  constructor(private dogService: DogService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dogService.getBreads();
  }
}
