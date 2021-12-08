import {Component, OnInit} from '@angular/core';
import { AppService } from "./shared/services/app.service";
import {Crust} from "./shared/models/crust";
import {CrustService} from "./shared/services/crust.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ENIPizzaFront';

  constructor(private appService : AppService) {
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  testMethod() {
    console.log("Test bouton HTML");
    this.appService.tryMethod().subscribe(
      (data) => {
        // Lorsque l'API a répondu correctement.
        console.log(data);
      }, (error : any) => {
        // Lorsque l'API renvoie une erreur.
        console.error(error);
      }
    );
  }

}

