import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users: Object;
  //@ViewChild('gmap') gmapElement: any;
 // map: google.maps.Map;

  constructor(private data: DataService) { }
  ngOnInit() {
    // var mapProp = {
    //   center: new google.maps.LatLng(33.882701, 35.492547),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
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
