import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IskonaMenuModule} from "./components/menu/iskona-menu.module";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./pages/about/about.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {HomeComponent} from "./pages/home/home.component";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./store/user/user.reducer";
import {AuthFormModule} from "./components/auth-form";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IskonaMenuModule,
    StoreModule.forRoot({ user: userReducer }),
    AuthFormModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
