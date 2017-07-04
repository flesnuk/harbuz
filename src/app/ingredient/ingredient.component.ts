import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient, unitType, IngredientPrice, EuroUnit } from './../models/ingredient.class';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredientPrice: IngredientPrice
  ingredient: Ingredient
  price: EuroUnit
  editMode = false

  constructor() {
  }

  ngOnInit() {
    this.ingredient = this.ingredientPrice.ingredient;
    this.price = this.ingredientPrice.price;
  }

  keys(unitType: unitType): any[] {
    return Object.keys(unitType).filter(k => !isNaN(Number(k)));
  }

}
