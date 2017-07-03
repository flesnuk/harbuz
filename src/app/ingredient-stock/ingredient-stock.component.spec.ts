import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientStockComponent } from './ingredient-stock.component';

describe('IngredientStockComponent', () => {
  let component: IngredientStockComponent;
  let fixture: ComponentFixture<IngredientStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
