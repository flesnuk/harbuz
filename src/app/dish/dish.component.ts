import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, IngredientQuantity } from '../models/ingredient.class';
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

  constructor() {
   }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
  	this.dish.ingredientsUsed.push({ingredient: ingredient, quantity: 0 });
  }

  increment() {this.dish.time.seconds++;}

}

