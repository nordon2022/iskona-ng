import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu-component/menu.component";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class IskonaMenuModule { }
