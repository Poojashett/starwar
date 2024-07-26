import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';
let urlVehicles = 'https://swapi.dev/api/vehicles/';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent implements OnInit {
  load = true;
  unload = false;
  vehicle: any;
  disableP = '';
  disableN = '';
  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.getApi(urlVehicles).subscribe((data) => {
      this.vehicle = data;
      console.log(this.vehicle);
      this.load = false;
      this.unload = true;
      if (this.vehicle?.previous === null) {
        this.disableP = 'disable';
      } else {
        this.disableP = 'enable';
      }
    });
  }

  nextApi(url: any) {
    this.service.getApi(this.vehicle.next).subscribe((data) => {
      urlVehicles = url;

      this.vehicle = data;
      this.visible(this.vehicle);
      console.log(this.vehicle);
    });
  }

  previousApi(url: any) {
    this.service.getApi(this.vehicle.previous).subscribe((data) => {
      urlVehicles = url;

      this.vehicle = data;
      this.visible(this.vehicle);
      console.log(this.vehicle);
    });
  }

  character(data: any) {
    localStorage.setItem('vehicle', JSON.stringify(this.vehicle.results[data]));
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
