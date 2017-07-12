import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesComponent } from './dishes.component';
import {DishComponent} from '../dish/dish.component';
import {IngredientComponent} from '../ingredient/ingredient.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {IngredientShopComponent} from '../ingredient-shop/ingredient-shop.component';
import {FormsModule} from '@angular/forms';
import {appRoutes} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {IngredientService} from '../shared/ingredient.service';

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DishesComponent,
        IngredientComponent,
        DishComponent,
        IngredientsComponent,
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

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
