import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { PicsComponent } from './pages/pics/pics.component'
import { AboutComponent } from './pages/about/about.component'
import { PlacesComponent } from './pages/places/places.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pics', component: PicsComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'about', component: AboutComponent }, 

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
