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
import {reducers} from "./store/app.state";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {ButtonModule} from "primeng/button";
import { TestimonyComponent } from './pages/testimony/testimony.component';
import { NewsComponent } from './pages/news/news.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import {PanelModule} from "primeng/panel";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    TestimonyComponent,
    NewsComponent,
    GalleryComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    PanelModule,
    IskonaMenuModule,
    StoreModule.forRoot(reducers),
    AuthFormModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
