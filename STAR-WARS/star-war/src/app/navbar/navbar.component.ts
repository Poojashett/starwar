import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  active = 'active';
  filmssactive='';
  spiciesactive='';
  plantesactive='';
  peopleactive='';
  strashipactive='';
  vehiclesactive='';
  constructor(public router: Router) {}

  ngOnInit(): void {}
  highlight() {
    if (this.router.url == '/films-details') {
      this.filmssactive = 'active';
      this.spiciesactive='';
      this.plantesactive='';
      this.peopleactive='';
      this.strashipactive='';
      this.vehiclesactive='';
    }
    else if(this.router.url == '/spicies-details'){
      this.filmssactive = '';
      this.spiciesactive='active';
      this.plantesactive='';
      this.peopleactive='';
      this.strashipactive='';
      this.vehiclesactive='';
    }
    else if (this.router.url == '/plantes-details') {
      this.filmssactive = '';
      this.spiciesactive='';
      this.plantesactive='active';
      this.peopleactive='';
      this.strashipactive='';
      this.vehiclesactive='';
    }
    else if(this.router.url == '/people-details'){
      this.filmssactive = '';
      this.spiciesactive='';
      this.plantesactive='';
      this.peopleactive='active';
      this.strashipactive='';
      this.vehiclesactive='';
    }
    else if (this.router.url == '/straship-details') {
      this.filmssactive = '';
      this.spiciesactive='';
      this.plantesactive='';
      this.peopleactive='';
      this.strashipactive='active';
      this.vehiclesactive='';
    }
    else if(this.router.url == '/vehicles-details'){
      this.filmssactive = '';
      this.spiciesactive='';
      this.plantesactive='';
      this.peopleactive='';
      this.strashipactive='';
      this.vehiclesactive='active';
    }
  }
}
