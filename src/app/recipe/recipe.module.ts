import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe.component";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http'

@NgModule({
    declarations:[RecipeComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent],
    imports:[
        CommonModule,
        HttpClientModule,
    ],
    exports:[RecipeComponent, RecipeListComponent, RecipeItemComponent, RecipeDetailComponent],
    providers:[]
})
export class RecipeModule {

}