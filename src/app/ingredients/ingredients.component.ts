import { Mass, IngredientPrice, EuroMassUnit, Euro } from './../models/ingredient.class';
import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, MassUnit } from '../models/ingredient.class';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() ingredients: Ingredient[]
  ingredientPrices: IngredientPrice[]


  constructor() {}

  ngOnInit() {
    this.ingredientPrices = [];
    this.ingredients.forEach(ingredient => {
      this.ingredientPrices.push(new IngredientPrice(ingredient, new EuroMassUnit(new Euro('1.34'))))
    });
  }


  addIngredient(name: HTMLInputElement) {
    const ingredient = new Ingredient(name.value, MassUnit);
    this.ingredients.push(ingredient);
    name.value = ''; // clear field
  }
}
