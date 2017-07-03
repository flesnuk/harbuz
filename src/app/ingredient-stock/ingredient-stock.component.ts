import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, IngredientQuantityBlock, IngredientQuantity, Mass } from './../models/ingredient.class';

@Component({
  selector: 'app-ingredient-stock',
  templateUrl: './ingredient-stock.component.html',
  styleUrls: ['./ingredient-stock.component.css']
})
export class IngredientStockComponent implements OnInit {
  @Input() ingredients: Ingredient[]
  ingredientStock: IngredientQuantityBlock[]

  constructor() { }

  ngOnInit() {
    this.ingredientStock = [];
    this.ingredients.forEach(ingredient => {
      this.ingredientStock.push(new IngredientQuantityBlock(4, new IngredientQuantity(ingredient, new Mass(5))));
    });
  }

}
