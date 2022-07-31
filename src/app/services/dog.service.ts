import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, catchError, Subject, tap, throwError} from "rxjs";
import {ApiResponse, BreedResponse} from "../commun/models";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private apiUrl = environment.apiUrl;

  private _sideBarItems = new Subject<{ name: string, children: string[] }[]>();
  private _dogs = new BehaviorSubject<string[]>([]);
  private _breedDogs = new BehaviorSubject<string[]>([]);

  constructor(private _http: HttpClient, private _router: Router) {
  }

  get sideBarItems$() {
    return this._sideBarItems.asObservable();
  }

  get dogs$() {
    return this._dogs.asObservable();
  }

  get breedDogs$() {
    return this._breedDogs.asObservable();
  }

  getRandomDogsImages(max: number = 10) {
    return this._http.get<ApiResponse<string[]>>(`${this.apiUrl}/breeds/image/random/${max}`).pipe(
      tap(data => this._dogs.next(data.message))
    );
  }

  getImageByBreed(...breeds: string[]) {
    return this._http.get<ApiResponse<string[]>>(`${this.apiUrl}/breed/${breeds.join('/')}/images`).pipe(
      tap(data => this._breedDogs.next(data.message)),
      catchError((err) => this.onError(err))
    )
  }

  getBreads() {
    return this._http.get<ApiResponse<BreedResponse>>(`${this.apiUrl}/breeds/list/all`)
      .pipe(tap(data => {
          const tmp = Object.keys(data.message).map((x) => {
            return {name: x, children: data.message[x]}
          });
          this._sideBarItems.next(tmp);
        })
      )
  }

  getSubBread(breed: string) {
    return this._http.get(`${this.apiUrl}/breed/${breed}/list`)
  }

  private onError(err: any) {
    this._router.navigate(['/404'])
    return throwError(err)
  }
}
