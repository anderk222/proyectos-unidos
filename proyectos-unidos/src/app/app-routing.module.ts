import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home/home.component';

const routes: Routes = [

  {
    path : '',
    component : HomeComponent,
  },
  {
    path : 'states',
    loadChildren : ()=>import('./feature/state/state.module').then(m=>m.NameModule)
  },
  {
    path : 'places',
    loadChildren : ()=>import('./feature/places/places.module').then(m=>m.PlaceModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
