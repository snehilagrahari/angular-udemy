import { Recipe } from "../constants";

export class RecipeSrevice{
    recipes : Recipe [] = [
    {
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
    },{
        name : "Poha [Chura]",
        imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyu6GHCXmMweXE84HAo4m-48iKsral9fwwCA&usqp=CAU",
        ingredients : [
        {
            name : "Chura",
            qty : "250g"
        },
        {
            name : "Turmeric Powder",
            qty : "2 spoon"
        },
        {
            name : "Peanuts",
            qty : "100 g"
        }
        ],
    }
    ];

    getRecipes(){
        return this.recipes;
    }

    getRecipeById(id : number){
        return this.recipes[id];
    }

    addRecipe(data : Recipe){
        this.recipes.push(data);
    }

}