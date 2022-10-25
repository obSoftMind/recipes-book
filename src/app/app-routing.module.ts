import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe/recipe-resolver.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [

  {path:'' , redirectTo : '/recipe', pathMatch:'full'},

  { path:'recipe',  component:RecipeComponent, canActivate:[AuthGuard], children:[
      {path:'' , component: RecipeStartComponent},
      {path:'new', component:RecipeEditComponent},
      {path:':id' , component: RecipeDetailComponent, resolve: [RecipeResolverService]},
      {path:':id/edit' , component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ] 
  },

  { path:'shopping-list', component : ShoppingListComponent},
  { path:'auth', component : AuthComponent}
];    

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }