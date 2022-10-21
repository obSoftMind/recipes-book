import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations:[DropdownDirective],
    imports:[HttpClientModule],
    exports:[DropdownDirective]
})
export class SharedModule {}