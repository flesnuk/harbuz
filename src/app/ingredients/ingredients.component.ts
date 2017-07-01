import { Mass } from './../models/ingredient.class';
import { Component, OnInit, Input } from '@angular/core';
import { Ingredient, MassUnit } from '../models/ingredient.class';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() ingredients: Ingredient[]


  constructor() {
  }

  ngOnInit() {
  }


  addIngredient(name: HTMLInputElement) {
    const ingredient = new Ingredient(name.value, MassUnit);
    this.ingredients.push(ingredient);
    name.value = ''; // clear field
  }
}
