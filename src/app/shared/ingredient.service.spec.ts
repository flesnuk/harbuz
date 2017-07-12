import { Dish, Time } from './../models/dish.class';
import { Mass } from './../models/unit.class';
import { inject, TestBed } from '@angular/core/testing';
import { MassUnit } from '../models/unit.class';
import { Ingredient, IngredientQuantity, IngredientQuantityBlock } from './../models/ingredient.class';
import { IngredientService } from './ingredient.service';

describe('IngredientService', () => {
  const ingredient = new Ingredient('oil', MassUnit);
  const fiveKg = new IngredientQuantity(ingredient, new Mass(5, MassUnit.kg));
  const ingrBlock = new IngredientQuantityBlock(5, fiveKg);
  const dish = new Dish('paella', new Time());

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientService]
    });
  });

  it('should be created', inject([IngredientService], (service: IngredientService) => {
    expect(service).toBeTruthy();
  }));


  it('should add ingredient', inject([IngredientService], (service: IngredientService) => {
    service.addIngredient(ingredient);
    expect(service.getIngredients()).toContain(ingredient);
  }));

  it('should buy ingredient', inject([IngredientService], (service: IngredientService) => {
    service.buyIngredientQuantity(ingrBlock);
    expect(service.getIngredientQuantities().get(ingredient)).not.toBeNull();
    service.buyIngredientQuantity(ingrBlock);
    expect(service.getIngredientQuantities().get(ingredient).quantity).toEqual(new Mass(10, MassUnit.kg))
  }));

  it('should add dish', inject([IngredientService], (service: IngredientService) => {
    service.addDish(dish);
    expect(service.getDishes()).toContain(dish);
  }));

  it('should cook dish', inject([IngredientService], (service: IngredientService) => {
    dish.ingredientsUsed.push(fiveKg);
    service.buyIngredientQuantity(ingrBlock);
    expect(service.canCook(dish)).toBe(true);
    service.cook(dish);
    expect(service.getIngredientQuantities().get(ingredient).quantity).toEqual(new Mass(0, MassUnit.kg))

  }));

});
