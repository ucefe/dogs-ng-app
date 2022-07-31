import {Component, OnDestroy, OnInit} from '@angular/core';
import {DogService} from "../../services/dog.service";
import {ActivatedRoute} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit, OnDestroy {

  private _unsubscribeAll = new Subject();
  breedDogs$ = this.dogService.breedDogs$;

  constructor(private route: ActivatedRoute, private dogService: DogService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {
        const breed = data.get('breed')
        const subBreed = data.get('subBreed')

        if (breed && subBreed) {
          this.dogService.getImageByBreed(breed, subBreed)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe()
        } else if (breed) {
          this.dogService.getImageByBreed(breed)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe()
        }
      })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
