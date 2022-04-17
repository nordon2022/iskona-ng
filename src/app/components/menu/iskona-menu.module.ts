import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu-component/menu.component";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {BrowserModule} from "@angular/platform-browser";
import {SplitButtonModule} from "primeng/splitbutton";

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    SplitButtonModule
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class IskonaMenuModule { }
