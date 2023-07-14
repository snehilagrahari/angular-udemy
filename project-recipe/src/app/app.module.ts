import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DrawerOpenDirective } from './drawer-open.directive';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoRecipeComponent } from './recipes/no-recipe/no-recipe.component';
import { RecipeSrevice } from './recipes/recipe.service';
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes : Routes = [
  {
    path : '',
    component : RecipesComponent,
    children : [
      {
        path : "",
        component : NoRecipeComponent
      },{
        path : 'addRecipe',
        component : AddRecipeComponent,
        canDeactivate : [CanDeactivateGuard]
      },{
        path : 'recipe/:id',
        component : RecipeDetailComponent
      }
    ]
  },
  {
    path : 'shoppingList',
    component : ShoppingListComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DrawerOpenDirective,
    PageNotFoundComponent,
    NoRecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    ReactiveFormsModule
  ],
  providers: [RecipeSrevice, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
