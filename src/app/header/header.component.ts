import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //https://angularfirebase.com/lessons/bootstrap-4-collapsable-navbar-work-with-angular/

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

}
