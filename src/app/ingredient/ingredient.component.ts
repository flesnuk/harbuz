import { IngredientQuantity } from './../models/ingredient.class';
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
  @Input() ingredientQuantity: IngredientQuantity;
  editMode = false;

  constructor() {
  }

  ngOnInit() {
  }

}
