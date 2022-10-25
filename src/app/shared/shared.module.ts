import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations:[DropdownDirective,LoadingSpinnerComponent],
    imports:[HttpClientModule],
    exports:[DropdownDirective, LoadingSpinnerComponent]
})
export class SharedModule {}