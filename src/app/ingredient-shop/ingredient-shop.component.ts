import { Component, OnInit } from '@angular/core';

import { IngredientService } from '../shared/ingredient.service';
import { Ingredient, IngredientQuantityBlock, IngredientQuantity } from '../models/ingredient.class';
import {Euro} from '../models/euro.class';
import {Mass, unitType} from '../models/unit.class';

@Component({
  selector: 'app-ingredient-stock',
  templateUrl: './ingredient-shop.component.html',
  styleUrls: ['./ingredient-shop.component.css']
})
export class IngredientShopComponent implements OnInit {
  ingredients: Ingredient[];
  ingredientStock: IngredientQuantityBlock[];
  editPrice = false;
  editQuantity = false;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    this.ingredientStock = this.ingredientService.getIngredientQuantityBlocks();
  }

  buy(ingr: IngredientQuantityBlock) {
    this.ingredientService.buyIngredientQuantity(ingr);
  }

  keys(unitType: unitType): any[] {
    return Object.keys(unitType).filter(k => !isNaN(Number(k)));
  }

}
