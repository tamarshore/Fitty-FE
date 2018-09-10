import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {AppRoutingModule} from './app-routing.moudle';
import {MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MeasurementsComponent} from './measurements/measurements.component';
import {BusinessComponent} from './business/business.component';
import {AboutComponent} from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // Material modules
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AboutComponent,
    MeasurementsComponent,
    ContactComponent,
    LoginComponent,
    SignUpComponent,
    BusinessComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
