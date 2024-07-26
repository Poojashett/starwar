import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { FilmsComponent } from './films/films.component';
import { HomeComponent } from './home/home.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlantesDetailsComponent } from './plantes-details/plantes-details.component';
import { SpiciesDetailsComponent } from './spicies-details/spicies-details.component';
import { SpiciesComponent } from './spicies/spicies.component';
import { StartshipComponent } from './startship/startship.component';
import { StrashipDetailsComponent } from './straship-details/straship-details.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'films-character', component: FilmsComponent },
  { path: 'spicies-character', component: SpiciesComponent },
  { path: 'plantes-character', component: PlanetsComponent },
  { path: 'people-character', component: PeopleComponent },
  { path: 'straship-character', component: StartshipComponent },
  { path: 'vehicles-character', component: VehiclesComponent },

  { path: 'films-details', component: FilmsDetailComponent },
  { path: 'spicies-details', component: SpiciesDetailsComponent },
  { path: 'plantes-details', component: PlantesDetailsComponent },
  { path: 'people-details', component: PeopleDetailsComponent },
  { path: 'straship-details', component: StrashipDetailsComponent },
  { path: 'vehicles-details', component: VehiclesDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
