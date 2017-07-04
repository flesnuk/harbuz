import { IngredientService } from './../ingredient.service';
import { Component, OnInit, Input } from '@angular/core';
import { Dish, Time } from '../models/dish.class';
import { Ingredient, MassUnit, VolumeUnit } from '../models/ingredient.class';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: Dish[]
  ingredients: Ingredient[]

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
