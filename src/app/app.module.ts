import { BrowserModule } from '@angular/platform-browser';
import {NgModule, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing';
import { DeployComponent } from './application/deploy';
import { WebAppComponent } from './application/web_app';
import {ImageComponent} from './image/image';


@NgModule({
  declarations: [
    AppComponent , DeployComponent , WebAppComponent , ImageComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {

}
