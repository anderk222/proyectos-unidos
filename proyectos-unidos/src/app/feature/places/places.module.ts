import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

import { PlacesComponent } from './places/places.component';
import { SearchComponent } from './search/search.component';

const routes: Route[] = [
    {
        path: 'search',
        component : SearchComponent
    },
    {
        path: ':place',
        component: PlaceDetailComponent
    },
    {
        path:':state/state',
        component : PlacesComponent
    }


];

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [],
    declarations: [PlacesComponent, PlaceDetailComponent,SearchComponent],
    providers: [],
})
export class PlaceModule { }
