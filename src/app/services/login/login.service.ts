import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  login(uploadData){
// //console.log("API");
    const endpoint = 'http://52.205.99.171:7777/mfi-branch/v1.0/login';
    // //console.log(uploadData);
    // const formData: FormData = new FormData();
    // formData.append('invoice-file', fileToUpload);
  
    let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Accept', 'application/json');
  
      return new Promise((resolve, reject) => {
           
        this.httpClient.post(endpoint,  uploadData,{ headers: headers })
        .subscribe((data)=>{
           resolve(data);
           // console.log(data);
        },
        (error)=>{
         reject(error);
        }
        )
  
      })


  }
}

