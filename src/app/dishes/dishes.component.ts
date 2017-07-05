import { Component, OnInit } from '@angular/core';

import { IngredientService } from '../shared/ingredient.service';
import { Dish, Time } from '../models/dish.class';
import { Ingredient } from '../models/ingredient.class';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) {
    this.dishes = ingredientService.getDishes();
  }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
  }

  addDish(dishName: HTMLInputElement, dishMinutes: number, dishSeconds: number) {
    this.ingredientService.addDish(new Dish(dishName.value, new Time(dishSeconds, dishMinutes)));
    dishName.value = ''; // clear dishName input
  }

}
