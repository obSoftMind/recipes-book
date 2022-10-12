import { Component, OnInit, Input} from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipeDt') recipeItem : Recipe
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredientToShoppingList(){
    this.shoppingListService.addIngredients(this.recipeItem.ingredients)
  }
}
