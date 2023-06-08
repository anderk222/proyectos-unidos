import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


import { StatesComponent } from './states/states.component';

const routes : Route[] = [
    {
        path : '',
        component : StatesComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [StatesComponent],
    providers: [],
})
export class NameModule { }
