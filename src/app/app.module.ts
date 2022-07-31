import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BreedComponent } from './components/breed/breed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import { DogImageComponent } from './components/dog-image/dog-image.component';
import {MatDialogModule} from "@angular/material/dialog";
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DogContainerComponent } from './shared/dogs-container/dog-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreedComponent,
    SideBarComponent,
    DogImageComponent,
    NotFoundComponent,
    DogContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
