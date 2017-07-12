import { IngredientService } from './shared/ingredient.service';
import { TestBed, async } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component';
import {appRoutes} from './app.module';
import {IngredientShopComponent} from './ingredient-shop/ingredient-shop.component';
import {DishesComponent} from './dishes/dishes.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {DishComponent} from './dish/dish.component';
import {IngredientComponent} from './ingredient/ingredient.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IngredientComponent,
        DishComponent,
        IngredientsComponent,
        DishesComponent,
        IngredientShopComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(
          appRoutes
        ),
        FormsModule
      ],
      providers: [IngredientService]
    })
  });

  /* it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
  }); */

});
