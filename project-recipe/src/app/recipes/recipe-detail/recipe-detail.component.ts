import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { Recipe } from 'src/app/constants';
import { RecipeSrevice } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipeDetails : Recipe | undefined;
  paramSub : Subscription;

  constructor( private route : ActivatedRoute, private recipeService : RecipeSrevice) {

  }
  
  ngOnInit(): void {
    this.paramSub = this.route.params.subscribe((params : Params)=>{
      this.recipeDetails = this.recipeService.getRecipeById(+params['id']);
    })
    
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
