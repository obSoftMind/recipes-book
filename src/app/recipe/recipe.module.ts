import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe.component";
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RouterModule } from "@angular/router";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";

@NgModule({
    declarations:[
        RecipeComponent, 
        RecipeListComponent, 
        RecipeItemComponent, 
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent
       ],
    imports:[
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule
    ],
    exports:[RecipeComponent, 
        RecipeListComponent, 
        RecipeItemComponent, 
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    providers:[]
})
export class RecipeModule {

}