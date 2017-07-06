import { IngredientQuantity } from './../models/ingredient.class';
import { Component, OnInit } from '@angular/core';

import { IngredientService } from '../shared/ingredient.service';
import { IngredientPrice, Ingredient } from '../models/ingredient.class';
import {MassUnit} from '../models/unit.class';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  ingredientQuantities: Map<Ingredient, IngredientQuantity>;


  constructor(private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientQuantities = this.ingredientService.getIngredientQuantities();
  }


  addIngredient(name: HTMLInputElement) {
    const ingredient = new Ingredient(name.value, MassUnit);
    this.ingredientService.addIngredient(ingredient);
    name.value = ''; // clear field
  }
}
