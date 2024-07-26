import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spicies-details',
  templateUrl: './spicies-details.component.html',
  styleUrls: ['./spicies-details.component.css'],
})
export class SpiciesDetailsComponent implements OnInit {
  species: any;
  id: any;
  src:Array<string>=[];
  srcArray=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10kOHyPbY2pfbm-Z3AjqjuUKVAp5M-hpIc-h3Vm4-wV0p2vnXqiStqRPvQG79zvpcYe0&usqp=CAU',
'https://www.gamespot.com/a/uploads/scale_medium/171/1712892/3327838-h1fermj9-720.jpg',
'https://s2.reutersmedia.net/resources/r/?m=02&d=20171208&t=2&i=1213066376&w=780&fh=&fw=&ll=&pl=&sq=&r=LYNXMPEDB7003',
'https://www.denofgeek.com/wp-content/uploads/2016/12/star_wars_races_togruta.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7L4nej__XWGIl73_rOYPTlt3o8w_KkXW0hWRBynF08puGHYvth-JUOscqdtBx3tAiSQ&usqp=CAU',
'https://d18ufwot1963hr.cloudfront.net/wp-content-production/uploads/2020/12/sw_holocron-Twitter.jpg',
'https://images.rtl.fr/~c/770v513/rtl/www/1279225-maz-kanata-dans-star-wars-7-avec-le-sabre-laser-d-anakin-et-luke-skywalker.jpg',
'https://bbts1.azureedge.net/images/p/full/2016/09/b18658c4-9cfe-4e79-8206-a27582d125d8.jpg',
'https://4.bp.blogspot.com/-7MA01QXQSPM/WcHFtQAPgGI/AAAAAAAAdok/Lsq4rBSfDrkOXsVJvbh44gRWmi6Y5mYswCEwYBhgL/s1600/IMG_2836.JPG',
'https://kastorskorner.com/wp-content/uploads/2017/09/SW-Black-Series-Maz-Kanata-013.jpg'
];
  constructor() {}

  ngOnInit(): void {
    this.species = JSON.parse(localStorage.getItem('species') as any);
    console.log(this.species);
    this.id = JSON.parse(localStorage.getItem('characterId') as any);
    this.src.push(this.srcArray[this.id]);
  }

}
