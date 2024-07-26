import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicle: any;
  id: any;
  src:Array<string>=[];
  srcArray=['https://mir-s3-cdn-cf.behance.net/project_modules/fs/c837c364939783.5ae2a160a73eb.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsBXMZJ4eF7h2zAC-FGMI8lwGD0Hohim48Z-Cx4ri6VvT1IyTyzrgYgwuTh8rdrrdJCc&usqp=CAU',
'https://www.pngkit.com/png/detail/132-1321163_speeder-bike.png',
'https://media.moddb.com/images/mods/1/47/46440/74-Z_speeder_bike.png',
'https://64.media.tumblr.com/9dbdc1a1e59be7b175d3f4f49be67a99/tumblr_mq6vwcxjuW1qbwnuho2_640.jpg',
'https://cdna.artstation.com/p/assets/images/images/000/632/440/large/chris-mathews-www-chrismathews-net-speederbike08.jpg?1429235154',
'https://media.sketchfab.com/models/92700b2daa9d4adb9334b1270deb6df1/thumbnails/36cd41574f0d4d598aa328e33ae5d8db/a28396e6bfe24a03aef1d42cd2c74043.jpeg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1z3CoXJS-rML8pyWkU-LZMYsUEr3Djwq87vROqzXaff57NaGnW80iD22Tg4MzvdvvWc&usqp=CAU',
'https://i.ytimg.com/vi/A3v_PVuTWGc/maxresdefault.jpg',
'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ad2b5b64939783.5ae2a160a5b9c.jpg'
];
  constructor() { }

  ngOnInit(): void {
    this.vehicle=JSON.parse(localStorage.getItem('vehicle')as any);
    this.id = JSON.parse(localStorage.getItem('characterId') as any);
    this.src.push(this.srcArray[this.id]);
  }
  
}
