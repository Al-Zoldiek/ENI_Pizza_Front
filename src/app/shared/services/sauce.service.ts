import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SauceService {

  constructor(private http: HttpClient) { }

  getSauce(sauceId: bigint){
    console.log(' > Sauce service : getSauce()');
    return this.http.get('http://localhost:8080/sauce/'+sauceId);
  }

  getSauces(){
    console.log(' > Sauce service : getSauces()');
    return this.http.get('http://localhost:8080/sauces');
  }
}
