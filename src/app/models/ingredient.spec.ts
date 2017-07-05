
import {async} from "@angular/core/testing";
import {Ingredient} from "./ingredient.class";
import {MassUnit} from "./unit.class";
describe('ingredient test', () => {


  it('should have the same name', async(() => {
    const ingredient = new Ingredient('rice', MassUnit);
    expect(ingredient.name).toEqual('rice')
  }));


});
