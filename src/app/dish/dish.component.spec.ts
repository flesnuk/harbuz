import { Ingredient, IngredientQuantity, IngredientQuantityBlock } from './../models/ingredient.class';
import { Mass, MassUnit } from './../models/unit.class';
import { Dish, Time } from './../models/dish.class';
import { DishesComponent } from './../dishes/dishes.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DishComponent} from '../dish/dish.component';
import {IngredientComponent} from '../ingredient/ingredient.component';
import {IngredientsComponent} from '../ingredients/ingredients.component';
import {IngredientShopComponent} from '../ingredient-shop/ingredient-shop.component';
import {FormsModule} from '@angular/forms';
import {appRoutes} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {IngredientService} from '../shared/ingredient.service';


describe('DishComponent', () => {
  let component: DishComponent;
  let fixture: ComponentFixture<DishComponent>;
  const ingredient = new Ingredient('rice', MassUnit);
  const fiveKg = new IngredientQuantity(ingredient, new Mass(5, MassUnit.kg));
  const ingrBlock = new IngredientQuantityBlock(5, fiveKg);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishComponent,
        IngredientComponent,
        DishesComponent,
        IngredientsComponent,
        IngredientShopComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes(
          appRoutes
        ),
        FormsModule
      ],
      providers: [ IngredientService]
    }).compileComponents();

    fixture = TestBed.createComponent(DishComponent);
    component = fixture.componentInstance;
    component.dish = new Dish('paella', new Time(50));
    fixture.detectChanges();
  }));


  it('should be created', () => {
    expect(component).toBeTruthy();
  })

  it('should increment time', () => {
    component.increment();
    expect(component.dish.time.seconds).toBe(51);
  })

  it('should add ingredient', () => {
    component.addIngredient(ingredient);
    expect(component.ingredientsUsed.length).toBe(1);
  })

  it('should cook', () => {
    const ingrService = fixture.debugElement.injector.get(IngredientService);
    component.addIngredient(ingredient);
    component.ingredientsUsed[0] = fiveKg;
    ingrService.buyIngredientQuantity(ingrBlock);
    component.cook();
    component.cook();
    expect(ingrService.getIngredientQuantities().get(ingredient).quantity.value).toBe(0);
  })

});
