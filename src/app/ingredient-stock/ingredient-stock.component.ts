import { IngredientService } from './../ingredient.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient, IngredientQuantityBlock, IngredientQuantity, Mass, Euro, MassUnit, VolumeUnit } from './../models/ingredient.class';

@Component({
  selector: 'app-ingredient-stock',
  templateUrl: './ingredient-stock.component.html',
  styleUrls: ['./ingredient-stock.component.css']
})
export class IngredientStockComponent implements OnInit {
  ingredients: Ingredient[]
  ingredientStock: IngredientQuantityBlock[]

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientStock = [];
    this.ingredients.forEach(ingredient => {
      this.ingredientStock.push(new IngredientQuantityBlock(4, new IngredientQuantity(ingredient, new Mass(5)), new Euro('4.')));
    });
  }

}
