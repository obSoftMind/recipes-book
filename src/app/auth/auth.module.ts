import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations:[AuthComponent],
  exports:[AuthComponent],
  imports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AuthModule {
 
}