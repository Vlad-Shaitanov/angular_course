import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  // Используемые компоненты
  declarations: [
    AppComponent,
    ProductComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Корневой компонент
})
export class AppModule { }
