import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginFormComponent} from "./login/login-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {RegistrationFormComponent} from "./registration/registration-form.component";
import {AuthFormComponent} from "./auth-form.component";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent,
    AuthFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    AuthRoutingModule

  ],
  exports: [
  ],
  providers: []
})
export class AuthFormModule {

}
