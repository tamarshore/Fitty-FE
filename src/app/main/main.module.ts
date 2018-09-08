import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MainRoutingModule} from './main-routing.moudle';
import {MainComponent} from './main.component';
import {MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {AboutComponent} from './about/about.component';
import {MeasurementsComponent} from './measurements/measurements.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    MatTabsModule,
    // Material modules
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    MeasurementsComponent,
    ContactComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
