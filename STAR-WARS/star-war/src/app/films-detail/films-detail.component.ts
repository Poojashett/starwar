import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.css']
})
export class FilmsDetailComponent implements OnInit {
  filmdetail: any;

  constructor() { }

  ngOnInit(): void {
    this.filmdetail=JSON.parse(localStorage.getItem('films') as any)
    console.log('film fetch',this.filmdetail);
    
  }

}
