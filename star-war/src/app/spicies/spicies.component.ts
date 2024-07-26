import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';
 let urlSpecies = 'https://swapi.dev/api/species/';

@Component({
  selector: 'app-spicies',
  templateUrl: './spicies.component.html',
  styleUrls: ['./spicies.component.css'],
})
export class SpiciesComponent implements OnInit {
  load = true;
  unload = false;
  species: any;
  disableP = '';
  disableN = '';

  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.speciesApi(urlSpecies).subscribe((data) => {
      this.species = data;
      this.load = false;
      this.unload = true;
      if (this.species?.previous === null) {
        this.disableP = 'disable';
      } else {
        this.disableP = 'enable';
      }
    });
  }
  nextApi(url: any) {
    this.service.getApi(this.species.next).subscribe((data) => {
      urlSpecies = url;

      this.species = data;
      this.load = false;
      this.unload = true;
      this.visible(this.species);
    });
  }

  previousApi(url:any) {
    this.service.getApi(this.species.previous).subscribe((data) => {
      urlSpecies = url;

      this.species = data;
      this.load = false;
      this.unload = true;
      this.visible(this.species);
    });
  }

  character(data: any) {
    localStorage.setItem('species', JSON.stringify(this.species.results[data]));
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
