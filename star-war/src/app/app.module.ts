import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FilmsComponent } from './films/films.component';
import { SpiciesComponent } from './spicies/spicies.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { StartshipComponent } from './startship/startship.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { SpiciesDetailsComponent } from './spicies-details/spicies-details.component';
import { PlantesDetailsComponent } from './plantes-details/plantes-details.component';
import { StrashipDetailsComponent } from './straship-details/straship-details.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { StarWarserviceService } from './star-warservice.service';
import { CacheInterceptor } from './intersceptor/cache.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    FilmsComponent,
    SpiciesComponent,
    PlanetsComponent,
    PeopleComponent,
    StartshipComponent,
    VehiclesComponent,
    NavbarComponent,
    PeopleDetailsComponent,
    FilmsDetailComponent,
    SpiciesDetailsComponent,
    PlantesDetailsComponent,
    StrashipDetailsComponent,
    VehiclesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StarWarserviceService,

    {
      provide : HTTP_INTERCEPTORS,
      useClass : CacheInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
