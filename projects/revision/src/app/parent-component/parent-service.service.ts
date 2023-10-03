import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ParentServiceService {



  constructor(private http:HttpClient) { 
   

  }
  getUser(){
    return this.http.get('https://jsonplaceholder.org/users');
  }
}
