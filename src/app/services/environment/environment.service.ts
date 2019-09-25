import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }
  globalvalue(){
    var endpoint = 'http://52.205.99.171:8080/kazi/kazi-core/v1.0/';
     return endpoint;
   }
}
