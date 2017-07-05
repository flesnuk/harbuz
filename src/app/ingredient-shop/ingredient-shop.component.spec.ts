import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientShopComponent } from './ingredient-shop.component';

describe('IngredientShopComponent', () => {
  let component: IngredientShopComponent;
  let fixture: ComponentFixture<IngredientShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
