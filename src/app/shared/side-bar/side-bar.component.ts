import {Component, OnDestroy, OnInit} from '@angular/core';
import {DogService} from "../../services/dog.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  sideBarItems$ = this.dogService.sideBarItems$;
  dogSub: Subscription | null = null;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
  }

  refreshImages() {
    this.dogSub = this.dogService.getRandomDogsImages().subscribe();
  }

  ngOnDestroy() {
    this.dogSub?.unsubscribe();
  }
}
