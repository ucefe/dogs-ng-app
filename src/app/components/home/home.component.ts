import {Component, OnDestroy, OnInit} from '@angular/core';
import {DogService} from "../../services/dog.service";
import {Subject, takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DogImageComponent} from "../dog-image/dog-image.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  dogs$ = this.dogService.dogs$;

  private _unsubscribeAll = new Subject();

  constructor(private dogService: DogService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dogService.getRandomDogsImages()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
