import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/constants';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() ingredient : Ingredient;

  constructor() {}
}
