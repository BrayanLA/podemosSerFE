import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ImpactComponent } from './impact/impact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'services', component: ServicesComponent, data: { animation: 'Services' } },
  { path: 'impact', component: ImpactComponent, data: { animation: 'Impact' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
