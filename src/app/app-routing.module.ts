import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BreedComponent} from "./components/breed/breed.component";
import {SideBarResolver} from "./services/side-bar.resolver";
import {NotFoundComponent} from "./shared/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', resolve: { sideBar: SideBarResolver }, children: [
      {path: '', component: HomeComponent},
      {path: 'breed/:breed/:subBreed', component: BreedComponent},
      {path: 'breed/:breed', component: BreedComponent},
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
