import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/constants';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe-details') recipeDetails : Recipe = {
    name : "Chhole Bhature",
    imageUrl : "https://www.cookwithkushi.com/wp-content/uploads/2021/01/IMG_7769_.jpg",
    ingredients : [
      {
        name : "Chole Chana",
        qty : "250g"
      },
      {
        name : "Onion",
        qty : "1/2 kg"
      },
      {
        name : "Tomato",
        qty : "1/2 kg"
      }
    ],
  }

  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit(): void {
    //empty
  }

  onAddList(recipeData : Recipe){
    this.shoppingListService.addRecipeToList(recipeData);
  }
}
