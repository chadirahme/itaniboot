import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }
  ngOnInit() {
  }

  sendEmail(){
    alert("Email is sent..");
    // this.data.sendEmail().subscribe(data => {
    //     this.users = data
    //     console.log(this.users);
    //   }
    // );

    this.data.firstClick();
  }
}
