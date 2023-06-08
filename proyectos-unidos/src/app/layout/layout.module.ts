import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@NgModule({
    imports: [RouterModule],
    exports: [NavbarComponent,TabbarComponent],
    declarations: [NavbarComponent, TabbarComponent],
    providers: [],
})
export class LayoutModule { }
