import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, IngredientQuantity, Euro, Mass, unitType, MassUnit, Volume } from '../models/ingredient.class';
import { Dish } from '../models/dish.class';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish
  @Input() ingredients: Ingredient[]
  selectedIngredient: Ingredient

  keys(unitType: unitType): any[] {
    return Object.keys(unitType).filter(k => !isNaN(Number(k)));
  }

  constructor() {
  }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient) {
    this.dish.ingredientsUsed.push(new IngredientQuantity(ingredient.name, ingredient.unitType === MassUnit ? new Mass() : new Volume()));
  }

  increment() {this.dish.time.seconds++; }

  costDish() {
    return 0;
    /*return this.dish.ingredientsUsed
      .map(a => a.price.mul(a.quantity))
      .reduce((a, b) => a.sum(b), new Euro()); */
  }


}

