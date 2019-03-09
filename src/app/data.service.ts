import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //http://localhost:8090/email/sendContactEmail

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked');
  }

  sendEmail(){//testsendContactEmail
    return this.http.get('http://localhost:8090/email/sendContactEmail')
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
}
