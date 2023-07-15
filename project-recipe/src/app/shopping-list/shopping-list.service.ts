import { Ingredient, Recipe } from "../constants";

export class ShoppingListService{

    shoppingList : Ingredient[] = [];

    addRecipeToList(recipeData : Recipe){
        let newIngredients : Ingredient [] = recipeData.ingredients;
        this.shoppingList = this.shoppingList.concat(newIngredients);
    }

    addIngredientToList(ingredient : Ingredient){
        this.shoppingList.push(ingredient);
    }

    removeFromList(index : number){
        this.shoppingList.slice(index,1)
    }
}