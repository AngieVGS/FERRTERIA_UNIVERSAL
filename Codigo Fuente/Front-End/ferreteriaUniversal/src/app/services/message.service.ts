import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body) {
    return this.http.post('http://serviciosferreteria-env.eba-9ki99cpm.us-east-2.elasticbeanstalk.com//email/sendEmailBuzon', body);
  }
}
