import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, IngredientQuantity, Euro, Mass, MassUnit } from '../models/ingredient.class';
import { Dish } from '../models/dish.class';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

	@Input() dish: Dish
	@Input() ingredients: Ingredient[]
	selectedIngredient : Ingredient
  public massUnit : typeof MassUnit = MassUnit
  keys : any[]

  constructor() {
      this.keys = Object.keys(this.massUnit).filter(k => !isNaN(Number(k)));
  }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
  	this.dish.ingredientsUsed.push(new IngredientQuantity(ingredient, new Mass()));
  }

  increment() {this.dish.time.seconds++;}

  costDish() { 
    return this.dish.ingredientsUsed
      .map(a => a.ingredient.price.mul(a.quantity))
      .reduce((a, b) => a.sum(b), new Euro()); 
  }


}

