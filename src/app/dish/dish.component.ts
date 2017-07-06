import { IngredientService } from './../shared/ingredient.service';
import { Component, OnInit, Input } from '@angular/core';

import { Ingredient, IngredientQuantity } from '../models/ingredient.class';
import { Dish } from '../models/dish.class';
import {Mass, MassUnit, unitType, Volume} from '../models/unit.class';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish;
  @Input() ingredients: Ingredient[];
  selectedIngredient: Ingredient;
  ingredientsUsed: IngredientQuantity[];

  keys(unitType: unitType): any[] {
    return Object.keys(unitType).filter(k => !isNaN(Number(k)));
  }

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.ingredientsUsed = this.dish.ingredientsUsed
  }

  addIngredient(ingredient: Ingredient) {
    this.dish.ingredientsUsed.push(new IngredientQuantity(ingredient, ingredient.unitType === MassUnit ? new Mass() : new Volume()));
  }

  increment() {this.dish.time.seconds++; }

  canCook() {
    return this.ingredientService.canCook(this.dish);
  }

  cook() {
    if ( this.canCook() ) {
      this.ingredientService.cook(this.dish);
    } else {
      alert('Not enough ingredients on stock')
    }
  }
}

