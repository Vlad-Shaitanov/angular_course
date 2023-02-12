import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductService} from "./services/products.service";


@Component({
  selector: 'app-root', // Название компонента для шаблона
  templateUrl: './app.component.html', // Ссылка на шаблон компонента
  styleUrls: ['./app.component.css'] // Ссылка на стили компонента
})

// OnInit - реализация одного из этапов жизненного цикла компонента
export class AppComponent implements OnInit{
  title = 'Angular Course';
  products: IProduct[] = []
  loading = false

  constructor(private productsService: ProductService) {
  }

  // Функция выполнится при инициализации компонента
  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe(products => {
      // console.log('products', products);

      // Записываем значение
      this.products = products;
      this.loading = false;
    })
  }
}
