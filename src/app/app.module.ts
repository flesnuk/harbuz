import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DishComponent } from './dish/dish.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    DishComponent,
    IngredientsComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
