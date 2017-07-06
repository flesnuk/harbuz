import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Dish } from '../models/dish.class';
import { Euro } from '../models/euro.class';
import { EuroMassUnit, EuroVolumeUnit } from '../models/eurounit.class';
import {IngredientQuantityBlock, Ingredient,  IngredientPrice,  IngredientQuantity} from '../models/ingredient.class';
import { MassUnit, VolumeUnit } from '../models/unit.class';

@Injectable()
export class IngredientService implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('rice', MassUnit),
      new Ingredient('water', VolumeUnit)
  ];

  ingredientPrices: IngredientPrice[] = [
    new IngredientPrice(this.ingredients[0], new EuroMassUnit(new Euro('1.34'), MassUnit.g)),
    new IngredientPrice(this.ingredients[1], new EuroVolumeUnit(new Euro('2.50')))
  ];

  ingredientQuantities: IngredientQuantity[] = [];

  dishes: Dish[] = [];

  money: Euro = new Euro('100');
  private subject = new BehaviorSubject<Euro>(this.money);

  constructor() {}

  ngOnInit() {}

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  public getIngredientPrices(): IngredientPrice[] {
    return this.ingredientPrices;
  }

  public getIngredientQuantities(): IngredientQuantity[] {
    return this.ingredientQuantities;
  }

  public buyIngredientQuantity(ingredient: IngredientQuantityBlock) {
    this.ingredientQuantities.push(ingredient.blockQuantity);
    this.money = this.money.sub(ingredient.price);
    this.subject.next(this.money);
  }

  public getBalance(): Observable<Euro> {
    return this.subject.asObservable();
  }

  public getDishes(): Dish[] {
    return this.dishes;
  }

  public addDish(dish: Dish) {
    this.dishes.push(dish);
  }

}
