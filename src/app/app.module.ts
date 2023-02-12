import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {FormsModule} from "@angular/forms";
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@NgModule({
  // Используемые компоненты
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent,
    FilterProductsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Корневой компонент
})
export class AppModule { }
