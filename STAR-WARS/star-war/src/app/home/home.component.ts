import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  changeImage1: boolean = false;
  changeImage2: boolean = false;
  changeImage3: boolean = false;
  changeImage4: boolean = false;
  changeImage5: boolean = false;
  changeImage6: boolean = false;

  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {}
}
