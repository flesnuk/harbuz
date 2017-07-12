import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientShopComponent } from './ingredient-shop.component';
import {DishesComponent} from '../dishes/dishes.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {DishComponent} from '../dish/dish.component';
import {IngredientComponent} from '../ingredient/ingredient.component';
import {FormsModule} from '@angular/forms';
import {appRoutes} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {IngredientService} from '../shared/ingredient.service';

describe('IngredientShopComponent', () => {
  let component: IngredientShopComponent;
  let fixture: ComponentFixture<IngredientShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientShopComponent,
        IngredientComponent,
        DishComponent,
        IngredientsComponent,
        DishesComponent,
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

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be true', () => {
    expect(true).toBe(true);
  })

});
