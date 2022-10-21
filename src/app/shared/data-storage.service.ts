import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "../recipe/recipe.model";
import { RecipeService } from "../recipe/recipe.service";

@Injectable({
  providedIn:'root'
})
export class DataStorageService {
  BASE_URL_FIREBASE = `https://recipebook-47082-default-rtdb.europe-west1.firebasedatabase.app/recipes.json`
  constructor(private http : HttpClient, private recipeService : RecipeService){
  }
  
  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.BASE_URL_FIREBASE, recipes)
    .subscribe(response => {
      console.log(response);
    })
  }
  
  fetchRecipes(){
    return this.http.get<Recipe[]>(this.BASE_URL_FIREBASE)
    .pipe(
      map(recipes => {
       return recipes.map( recipe => {
          return {...recipe, ingredients: recipe.ingredients? recipe.ingredients : []}
       })
      }),
      tap(
        recipes => {
          this.recipeService.setRecipes(recipes);
        }
      )
    )
  }
}