import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { StateSharedModule } from './shared/states/state.shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    StateSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
