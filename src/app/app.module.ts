import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule, MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginContentComponent } from './login-content/login-content.component';
import { ContentComponent } from './content/content.component';
import { LoginHeaderComponent } from './login-header/login-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginContentComponent,
    ContentComponent,
    LoginHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Material modules
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
