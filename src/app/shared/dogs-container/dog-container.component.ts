import {Component, Input, OnInit} from '@angular/core';
import {DogImageComponent} from "../../components/dog-image/dog-image.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dog-container',
  templateUrl: './dog-container.component.html',
  styleUrls: ['./dog-container.component.css']
})
export class DogContainerComponent implements OnInit {

  @Input() dogs: string[] | null = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openImage(dogImage: string) {
    this.dialog.open(DogImageComponent, {
      data: {
        image: dogImage
      },
    });
  }

}
