import {Component, OnInit} from '@angular/core';
import { AppService } from "./shared/services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ENIPizzaFront';

  constructor(private appService : AppService) {
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

  ngOnInit(): void {
    console.log('onInit');
  }

}

