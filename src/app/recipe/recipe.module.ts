import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe.component";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";


@NgModule({
    declarations:[RecipeComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent],
    imports:[],
    providers:[]
})
export class RecipeModule {

}