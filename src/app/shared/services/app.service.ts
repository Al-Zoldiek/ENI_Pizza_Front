import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private crustArray : any[] = [];

  //private appUrl: string

  constructor(private http: HttpClient) {

  }

  tryMethod(){
    console.log('Coucou depuis le service');
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
