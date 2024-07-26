import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';
let urlStarship = 'https://swapi.dev/api/starships/';

@Component({
  selector: 'app-startship',
  templateUrl: './startship.component.html',
  styleUrls: ['./startship.component.css'],
})
export class StartshipComponent implements OnInit {
  load = true;
  unload = false;
  disableP = '';
  disableN = '';
  starship: any;

  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.getApi(urlStarship).subscribe((data) => {
      this.starship = data;
      console.log(this.starship);
      this.load = false;
      this.unload = true;
      this.disableP = 'disable';
      this.disableN = 'enable';
    });
  }
  nextApi(url: any) {
    this.service.getApi(this.starship.next).subscribe((data) => {
      urlStarship = url;
      this.starship = data;
      this.load = false;
      this.unload = true;
      this.visible(this.starship);
    });
  }

  previousApi(url: any) {
    this.service.getApi(this.starship.previous).subscribe((data) => {
      urlStarship = url;
      this.starship = data;
      this.load = false;
      this.unload = true;
      this.visible(this.starship);
    });
  }

  character(data: any) {
    localStorage.setItem(
      'starship',
      JSON.stringify(this.starship.results[data])
    );
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
