import { Volume, Mass } from './../models/unit.class';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Dish } from '../models/dish.class';
import { Euro } from '../models/euro.class';
import { EuroMassUnit, EuroVolumeUnit } from '../models/eurounit.class';
import {Ingredient,  IngredientQuantityBlock,  IngredientQuantity} from '../models/ingredient.class';
import { MassUnit, VolumeUnit } from '../models/unit.class';

@Injectable()
export class IngredientService implements OnInit {
  ingredients: Ingredient[] = [
      new Ingredient('rice', MassUnit),
      new Ingredient('water', VolumeUnit)
  ];

  ingredientQuantitIngredientQuantityBlocks: IngredientQuantityBlock[] = [
    new IngredientQuantityBlock(4, new IngredientQuantity(this.ingredients[0], new Mass(500, MassUnit.g)), new Euro('0.2')),
    new IngredientQuantityBlock(4, new IngredientQuantity(this.ingredients[1], new Volume(1, VolumeUnit.L)), new Euro('0.64')),
  ];

  ingredientQuantities: Map<Ingredient, IngredientQuantity> = new Map();

  dishes: Dish[] = [];

  money: Euro = new Euro('100');
  private subject = new BehaviorSubject<any>({money: this.money, valid: true});

  constructor() {}

  ngOnInit() {}

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  public getIngredientQuantityBlocks(): IngredientQuantityBlock[] {
    return this.ingredientQuantitIngredientQuantityBlocks;
  }

  public getIngredientQuantities(): Map<Ingredient, IngredientQuantity> {
    return this.ingredientQuantities;
  }

  public buyIngredientQuantity(ingredient: IngredientQuantityBlock) {
    const ingredientObj = ingredient.blockQuantity.ingredient
    if (this.ingredientQuantities.has(ingredientObj)) {
      const prevQuantity = this.ingredientQuantities.get(ingredientObj);
      this.ingredientQuantities.set(ingredientObj, prevQuantity.sum(ingredient.blockQuantity));
    } else {
      this.ingredientQuantities.set(ingredientObj, ingredient.blockQuantity);
    }

    const remainder = this.money.sub(ingredient.price);
    const notValidOp = remainder.lt(new Euro('0'))
    this.money = notValidOp ? this.money : remainder;
    this.subject.next({money : this.money, valid: !notValidOp});
  }

  public getBalance(): Observable<any> {
    return this.subject.asObservable();
  }

  public getDishes(): Dish[] {
    return this.dishes;
  }

  public addDish(dish: Dish) {
    this.dishes.push(dish);
  }

}
