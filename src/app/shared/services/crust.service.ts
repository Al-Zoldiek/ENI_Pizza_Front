import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrustService {

  constructor(private http: HttpClient) { }

  getCrust(crustId : bigint){
    console.log(' > Crust service : getCrust()');
    return this.http.get('http://localhost:8080/crust/'+crustId);
  }

  getCrusts(){
    console.log(' > Crust service : getCrusts()');
    return this.http.get('http://localhost:8080/crusts');
  }
}
