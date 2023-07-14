import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient, Recipe } from 'src/app/constants';
import { RecipeSrevice } from '../recipe.service';
import { CanComponentDeactivate } from 'src/app/can-deactivate.guard';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit, CanComponentDeactivate{

  constructor(private recipeService : RecipeSrevice) {}

  newRecipe : FormGroup
  ingredients : Ingredient[] = [];

  ngOnInit(): void {
     this.newRecipe = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      imageUrl : new FormControl(null, [Validators.required]),
      ingredientItem : new FormGroup({
        name : new FormControl(null),
        qty : new FormControl(null)
      })
     }); 
  }

  onSubmit(){
    let recipeDetails : Recipe = {
      name : this.newRecipe.value.name,
      imageUrl : this.newRecipe.value.imageUrl,
      ingredients : this.ingredients,
    }
    this.recipeService.addRecipe(recipeDetails);

    this.newRecipe.reset();
    this.ingredients = [];
  }
  
  onAddIngredient(){
    this.ingredients.push(this.newRecipe.value.ingredientItem);
    console.log(this.ingredients)
    this.newRecipe.patchValue({
      ingredientItem : {
        name : "",
        qty : ""
      }
    });
  }

  deleteIngredient(index){
    this.ingredients.splice(index,1);
  }

  canDeactivate(){
    if(this.newRecipe.value.name !== "" || this.newRecipe.value.imageUrl!==""){
      return confirm('Changes you made to this page will not be saved. Do you really want to exit?')
    }
    return true
  }
}
