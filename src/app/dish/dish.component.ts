import { Component, OnInit } from '@angular/core';
import { IngredientComponent } from '../ingredient/ingredient.component';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

	name: string[]
	active: boolean
	ingredients: IngredientComponent[]
	thermalEnergy: ThermalEnergy
	prepTime: PrepTime

  constructor() {
  		this.ingredients = [];
   }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement){
  	let ingredient : IngredientComponent = new IngredientComponent();
  	this.ingredients.push(ingredient);
  }

}

class ThermalEnergy {
	watts: number 
	
	constructor(watts: number) {
		this.watts = watts
	}
}

class PrepTime {
	seconds: number 
	
	constructor(seconds: number) {
		this.seconds = seconds
	}
}