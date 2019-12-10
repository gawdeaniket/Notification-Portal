import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import {EnvironmentService} from '../environment/environment.service'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  endpoint:string;
  data;
  constructor(private httpClient: HttpClient, private environment: EnvironmentService) {
   this.endpoint =  this.environment.globalvalue();
  }
  notificationCallfile(file){
      // this.data = []
      const endpoint = this.endpoint;
      //console.log(file);
      const formData: FormData = new FormData();
      formData.append('notificationFile', file);
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Accept', 'application/json');
      return new Promise((resolve, reject) => {
        this.httpClient.post(endpoint + 'send-bulk-notifications-file', formData ,{ headers: headers })
        .subscribe((data: any) => {
         // console.log(data);
         resolve(data);
        },(err)=>{
         reject(err);
        })
      })
  }
  notificationCalljson(data){
    const endpoint = this.endpoint;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return new Promise((resolve, reject) => {
      this.httpClient.post(endpoint + 'send-bulk-notifications', data ,{ headers: headers })
      .subscribe((data: any)=>{
       resolve(data);
      },(err)=>{
       reject(err);
      })
    })
}
}
