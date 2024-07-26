import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {
  load = true;
  unload = false;

  urlfilms = 'https://swapi.dev/api/films/';
  films: any;

  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.filmsApi(this.urlfilms).subscribe((data) => {
      this.films = data;
      console.log(this.films);
      this.load = false;
      this.unload = true;
    });
  }

  filmCharacter(data: any) {
    localStorage.setItem('films', JSON.stringify(this.films.results[data]));
  }
}
