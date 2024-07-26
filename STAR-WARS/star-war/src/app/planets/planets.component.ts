import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';
let urlPlanets = 'https://swapi.dev/api/planets/';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  planets: any;
  load = true;
  unload = false;
  disableP = '';
  disableN = '';
  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.getApi(urlPlanets).subscribe((data) => {
      this.planets = data;
      console.log(this.planets);
      this.load = false;
      this.unload = true;
      this.disableP = 'disable';
      this.disableN = 'enable';

      if (this.planets?.previous === null) {
        this.disableP = 'disable';
      } else {
        this.disableP = 'enable';
      }
    });
  }
  nextApi(url: any) {
    this.service.getApi(this.planets.next).subscribe((data) => {
      urlPlanets = url;

      this.planets = data;
      this.load = false;
      this.unload = true;
      this.visible(this.planets);
    });
  }

  previousApi(url: any) {
    this.service.getApi(this.planets.previous).subscribe((data) => {
      urlPlanets = url;
      this.planets = data;
      this.load = false;
      this.unload = true;
      this.visible(this.planets);
    });
  }

  character(data: any) {
    localStorage.setItem('planets', JSON.stringify(this.planets.results[data]));
    localStorage.setItem('characterId',JSON.stringify(data));

  }
  visible(data: any) {
    if (data?.previous === null) {
      this.disableP = 'disable';
    } else {
      this.disableP = 'enable';
    }
    if (data?.next === null) {
      this.disableN = 'disable';
    } else {
      this.disableN = 'enable';
    }
  }
}
