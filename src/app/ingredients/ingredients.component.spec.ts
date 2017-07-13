import { Mass, MassUnit } from './../models/unit.class';
import { Ingredient, IngredientQuantity, IngredientQuantityBlock } from './../models/ingredient.class';
import { DishesComponent } from './../dishes/dishes.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { IngredientsComponent } from './ingredients.component';
import {DishComponent} from '../dish/dish.component';
import {IngredientComponent} from '../ingredient/ingredient.component';
import {IngredientShopComponent} from '../ingredient-shop/ingredient-shop.component';
import {FormsModule} from '@angular/forms';
import {appRoutes} from '../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {IngredientService} from '../shared/ingredient.service';

describe('IngredientsComponent', () => {
  let component: IngredientsComponent;
  let fixture: ComponentFixture<IngredientsComponent>;
  let de;
  let el: HTMLInputElement;
  let ingrService;
  const ingredient = new Ingredient('oil', MassUnit);
  const fiveKg = new IngredientQuantity(ingredient, new Mass(5, MassUnit.kg));
  const ingrBlock = new IngredientQuantityBlock(5, fiveKg);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsComponent,
        IngredientComponent,
        DishComponent,
        IngredientsComponent,
        IngredientShopComponent,
        DishesComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          appRoutes
        ),
        FormsModule
      ],
      providers: [IngredientService]
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;
    ingrService = fixture.debugElement.injector.get(IngredientService)
    fixture.detectChanges();

  }));

  it('should be true', () => {
    expect(true).toBe(true);
  })

  it('should add ingredient', () => {
    el.value = 'oil';
    component.addIngredient(el);
    const ingrNames = ingrService.getIngredients().map(ingr => ingr.name);
    expect(ingrNames).toContain('oil');
  })

  it('should return empty keys', () => {
    expect(component.keys().length).toBe(0);
  })

  it('should return one key', () => {
    ingrService.buyIngredientQuantity(ingrBlock);
    expect(component.keys().map(ingr => ingr.name)).toContain('oil');
  })

});
