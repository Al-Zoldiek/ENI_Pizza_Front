import { Component, OnInit } from '@angular/core';
import {Crust} from "../shared/models/crust";
import {CrustService} from "../shared/services/crust.service";
import {SauceService} from "../shared/services/sauce.service";
import {ToppingService} from "../shared/services/topping.service";
import {Sauce} from "../shared/models/sauce";
import {Topping} from "../shared/models/topping";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-pizza',
  templateUrl: './form-pizza.component.html',
  styleUrls: ['./form-pizza.component.scss']
})
export class FormPizzaComponent implements OnInit {
  createPizzaForm: FormGroup;

  public crustArray : Crust[] = [];
  public sauceArray : Sauce[] = [];
  public toppingArray : Topping[] = [];

  constructor(
    private crustService : CrustService,
    private sauceService : SauceService,
    private toppingService : ToppingService,
    private formBuilder: FormBuilder ) {
    this.createPizzaForm = this.formBuilder.group({
      name: ['(nom de la pizza)', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllCrusts();
    this.getAllSauces();
    this.getAllToppings();
  }

  // Récupère la liste de pâtes
  getAllCrusts() {
    console.log('> FormPizza component : getAllCrusts()');
    this.crustService.getCrusts().subscribe(
      (data: any) => {
        // Lorsque l'API a répondu correctement.
        this.crustArray = data;
      }, (error: any) => {
        // Lorsque l'API renvoie une erreur.
        console.error(error);
      }
    );
  }

  // Récupère la liste de bases
  getAllSauces() {
    console.log('> FormPizza component : getAllSauces()');
    this.sauceService.getSauces().subscribe(
      (data: any) => {
        // Lorsque l'API a répondu correctement.
        this.sauceArray = data;
      }, (error: any) => {
        // Lorsque l'API renvoie une erreur.
        console.error(error);
      }
    );
  }

  // Récupère la liste de bases
  getAllToppings() {
    console.log('> FormPizza component : getAllToppings()');
    this.toppingService.getToppings().subscribe(
      (data: any) => {
        // Lorsque l'API a répondu correctement.
        this.toppingArray = data;
      }, (error: any) => {
        // Lorsque l'API renvoie une erreur.
        console.error(error);
      }
    );
  }

  resetForm() {
    this.createPizzaForm.reset();
  }




}
