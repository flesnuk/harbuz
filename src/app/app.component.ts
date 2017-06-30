import { Component } from '@angular/core';
import { Ingredient, Euro, EuroMassUnit, MassUnit, VolumeUnit } from './models/ingredient.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];

  constructor () {
  	this.ingredients = [
  		new Ingredient("rice", new EuroMassUnit(MassUnit, MassUnit.g, new Euro("", 541))), 
  		new Ingredient("water", new EuroMassUnit(VolumeUnit, VolumeUnit.mL, new Euro("", 124)))
  	];
  }
}
