import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {ProductService} from "./services/products.service";
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        CategoryComponent,
        HomeComponent,
        ProductComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
