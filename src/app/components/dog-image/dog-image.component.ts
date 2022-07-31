import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dog-image',
  template: `
    <h1 mat-dialog-title>Snoop Dogg Doggy ^^</h1>
    <div mat-dialog-content>
        <img style="max-width: 600px; max-height: 600px" [src]="data.image" alt="A Dog">
    </div>
  `,
})
export class DogImageComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
