import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector:'app-recipe',
    templateUrl:'./recipe.component.html',
    styleUrls:['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

    ngOnInit(){
    }
    
}