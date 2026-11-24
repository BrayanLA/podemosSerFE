import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ImpactComponent } from './impact/impact.component';

// `order` es la posición de cada página en el "carrusel" horizontal (mismo orden
// que el menú): navegar a un número mayor desliza hacia la izquierda, a uno menor
// hacia la derecha. Ver la animación `routeSlide` en app.component.ts.
const routes: Routes = [
  { path: '', component: HomeComponent, data: { order: 0 } },
  { path: 'about', component: AboutComponent, data: { order: 1 } },
  { path: 'services', component: ServicesComponent, data: { order: 2 } },
  { path: 'impact', component: ImpactComponent, data: { order: 3 } },
  // Cualquier URL desconocida vuelve al inicio (antes mostraba una página en blanco)
  { path: '**', redirectTo: '' },
];

@NgModule({
  // Al cambiar de página se vuelve arriba, así la página nueva entra desde su inicio
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
