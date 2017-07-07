import { Euro } from './euro.class';
import { EuroUnit } from './eurounit.class';
import { Ingredient, IngredientPrice, IngredientQuantity, IngredientQuantityBlock } from './ingredient.class';
import { Mass, MassUnit } from './unit.class';
describe('ingredient test', () => {
  const ingredient = new Ingredient('rice', MassUnit);
  const fiveKg = new IngredientQuantity(ingredient, new Mass(5, MassUnit.kg));
  const hundredGrams = new IngredientQuantity(ingredient, new Mass(100, MassUnit.g))

  it('should have the same name', () => {
    expect(ingredient.name).toEqual('rice')
  });

  it('should create ingredient price', () => {
    const ingrPrice = new IngredientPrice(ingredient, new EuroUnit(new Euro('1.2'), MassUnit, MassUnit.kg));
    expect(ingrPrice).not.toBeNull();
  });

  it('should sum ingredientQuantity', () => {
    const sum = new IngredientQuantity(ingredient, new Mass(5.1, MassUnit.kg));
    expect(fiveKg.sum(hundredGrams)).toEqual(sum);
  });

  it('should display the total of quantity blocks', () => {
    const ingrBlock = new IngredientQuantityBlock(5, fiveKg);
    const twentyFiveKg = new Mass(25, MassUnit.kg);
    expect(ingrBlock.total().toString()).toBe(twentyFiveKg.toString());
  });


});
