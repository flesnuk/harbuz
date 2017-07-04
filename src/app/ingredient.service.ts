import { Dish } from './models/dish.class';
import { Ingredient, MassUnit, VolumeUnit, IngredientPrice, EuroMassUnit, Euro, EuroVolumeUnit } from './models/ingredient.class';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientService {
  ingredients: Ingredient[] = [
      new Ingredient('rice', MassUnit),
      new Ingredient('water', VolumeUnit)
  ];

  ingredientPrices: IngredientPrice[] = [
    new IngredientPrice(this.ingredients[0], new EuroMassUnit(new Euro('1.34'), MassUnit.g)),
    new IngredientPrice(this.ingredients[1], new EuroVolumeUnit(new Euro('2.50')))
  ];

  dishes: Dish[] = [];

  constructor() {}

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  public getIngredientPrices(): IngredientPrice[] {
    return this.ingredientPrices;
  }

  public getDishes(): Dish[] {
    return this.dishes;
  }

  public addDish(dish: Dish) {
    this.dishes.push(dish);
  }

}
