import { Component } from '@angular/core';
import {IProduct} from "./models/product";
import {products as data} from "./data/products";

@Component({
  selector: 'app-root', // Название компонента для шаблона
  templateUrl: './app.component.html', // Ссылка на шаблон компонента
  styleUrls: ['./app.component.css'] // Ссылка на стили компонента
})
export class AppComponent {
  title = 'Angular Course';

  products: IProduct[] = data
}
