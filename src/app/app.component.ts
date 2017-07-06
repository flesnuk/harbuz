import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Euro } from './models/euro.class';
import { Ingredient } from './models/ingredient.class';
import { IngredientService } from './shared/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: Ingredient[];
  balance: Euro;
  subscription: Subscription;

  constructor (private ingredientService: IngredientService) {
    this.subscription = this.ingredientService.getBalance().subscribe(op => {
      this.balance = op.money;
      if (!op.valid) {
        alert('Not enough funds');
      }
    });
  }
}
