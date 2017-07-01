import { Component } from '@angular/core';
import { Ingredient, IngredientPrice, Euro, EuroMassUnit, EuroVolumeUnit, MassUnit, VolumeUnit } from './models/ingredient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
    this.ingredients = [
      new IngredientPrice('rice', new EuroMassUnit(new Euro('', 541), MassUnit.g)),
      new IngredientPrice('water', new EuroVolumeUnit(new Euro('', 124), VolumeUnit.mL ))
    ];
  }
}
