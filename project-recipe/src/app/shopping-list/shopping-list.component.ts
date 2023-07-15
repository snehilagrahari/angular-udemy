import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../constants';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  shoppingList : Ingredient [] = []
  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit(){
    this.shoppingList = this.shoppingListService.shoppingList;
  }


}
