import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/constants';
import { RecipeSrevice } from '../recipe.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipelist : Recipe []  | undefined;

  constructor(private recipeService : RecipeSrevice, private router : Router) {}

  ngOnInit(): void {
    this.recipelist = this.recipeService.getRecipes();
  }

  onAddRecipe(){
    this.router.navigate(['/addRecipe']);
  }

}
