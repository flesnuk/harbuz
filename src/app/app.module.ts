import { IngredientService } from './shared/ingredient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DishComponent } from './dish/dish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DishesComponent } from './dishes/dishes.component';
import { IngredientShopComponent } from './ingredient-shop/ingredient-shop.component';

export const appRoutes: Routes = [
  { path: 'shop', component: IngredientShopComponent },
  { path: 'ingredients', component: IngredientsComponent},
  { path: 'dishes', component: DishesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    DishComponent,
    IngredientsComponent,
    DishesComponent,
    IngredientShopComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
