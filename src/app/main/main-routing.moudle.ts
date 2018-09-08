import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {MeasurementsComponent} from './measurements/measurements.component';
import {ContactComponent} from './contact/contact.component';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'measurements',
        component: MeasurementsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class MainRoutingModule {
}
