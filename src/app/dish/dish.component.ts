import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient.interface';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

	name: string[]
	active: boolean
	@Input() ingredients: Ingredient[]
	ingredientsUsed : Ingredient[]
	selectedIngredient : Ingredient
	thermalEnergy: ThermalEnergy
	prepTime: PrepTime

  constructor() {
  		this.ingredientsUsed = [];
   }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
  	this.ingredientsUsed.push(ingredient);
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