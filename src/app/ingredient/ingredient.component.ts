import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient, unitType, IngredientPrice } from './../models/ingredient.class';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: IngredientPrice
  editMode = false

  constructor() {
  }

  ngOnInit() {
  }

  keys(unitType: unitType): any[] {
    return Object.keys(unitType).filter(k => !isNaN(Number(k)));
  }

}
