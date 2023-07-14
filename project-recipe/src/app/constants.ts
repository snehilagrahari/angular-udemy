export interface Recipe {
    name : string,
    ingredients : Ingredient [],
    imageUrl : string,
}

export interface Ingredient{
    name : string,
    qty : string
}