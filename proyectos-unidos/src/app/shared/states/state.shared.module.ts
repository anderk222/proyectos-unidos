import { NgModule, OnInit } from '@angular/core';


import { SlideStatesComponent} from './slide-states/slide-states.component'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [SlideStatesComponent],
    declarations: [SlideStatesComponent],
    providers: [],
})
export class StateSharedModule  { 

    

}
