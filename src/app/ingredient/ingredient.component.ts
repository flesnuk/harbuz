import { Component, OnInit, Input, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient.class';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
	@Input() ingredient : Ingredient
	editMode: boolean = false

	constructor(){
	}

  ngOnInit() {
  }

}
