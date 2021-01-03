import { Component, OnInit } from '@angular/core';
import {Products} from "../products";

@Component({
  selector: 'app-aqg',
  templateUrl: './aqg.component.html',
  styleUrls: ['./aqg.component.css']
})
export class AqgComponent implements OnInit {

  heroes: any;
  myHero: any;
   // testFolder = './images/';
   // fs = require('fs');

  constructor() { }

  ngOnInit() {

    this.heroes = [
      new Products(1, 'Amur Bath mixer'),
      new Products(2, 'Amur single basin'),
      new Products(3, 'Berence'),
      new Products(4, 'Caresse Round'),
      new Products(5, 'Chronos bronze'),
      new Products(6, 'Chronos chrome'),
      new Products(7, 'Chronos copper'),
      new Products(8, 'COLORS-W'),
      new Products(9, 'COLORS'),
      new Products(10, 'Concealed Vent basin'),
      new Products(11, 'CUADRADO'),
      new Products(12, 'Dau Basin'),
      new Products(13, 'Dau Bath'),
      new Products(14, 'Donna cup'),
      new Products(15, 'Donna soap dispenser'),
      new Products(16, 'Donna tooth-brush'),
      new Products(17, 'EC201'),
      new Products(18, 'ER204'),
      new Products(19, 'ER305'),
      new Products(20, 'Folding shower seat'),
      new Products(21, 'Fun'),
      new Products(22, 'GALA E'),
      new Products(23, 'Industrial Kitchen sink'),
      new Products(24, 'Lile basin'),
      new Products(25, 'Lile Bath'),
      new Products(26, 'Lile bidet'),
      new Products(27, 'Lile Sink Mixer'),
      new Products(28, 'Luna cup'),
      new Products(29, 'Luna soap dispenser'),
      new Products(30, 'Luna tooth-brush'),
      new Products(31, 'MOD.B'),
      new Products(32, 'Nautalius Basin'),
      new Products(33, 'Nautalius Bath'),
      new Products(34, 'Nautalius Kitchen'),
      new Products(35, 'OBI Bath'),
      new Products(36, 'OBI bidet'),
      new Products(37, 'OBI mixer'),
      new Products(38, 'Ocean Plus'),
      new Products(39, 'Ocean'),
      new Products(40, 'ONNA'),
      new Products(41, 'Pacific'),
      new Products(42, 'Quant Basin'),
      new Products(43, 'Quant Bath'),
      new Products(44, 'Quant bidet'),
      new Products(45, 'RIO'),
      new Products(46, 'Salt Basin'),
      new Products(47, 'Salt Bath'),
      new Products(48, 'Soul'),
      new Products(49, 'Vent Basin'),
      new Products(50, 'Vent Bidet'),
      new Products(51, 'Vent Sink Mixer'),

    ];
    this.myHero = this.heroes[0];

    // this.fs.readdir(this.testFolder, (err, files) => {
    //   files.forEach(file => {
    //     console.log(file); // use those file and return it as a REST API
    //   });
    // })

  }

}
