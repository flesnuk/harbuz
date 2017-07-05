import { Component, OnInit, Input } from '@angular/core';

import { Ingredient, IngredientPrice } from '../models/ingredient.class';
import {EuroUnit} from '../models/eurounit.class';
import {unitType} from '../models/unit.class';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredientPrice: IngredientPrice;
  ingredient: Ingredient;
  price: EuroUnit;
  editMode = false;

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
