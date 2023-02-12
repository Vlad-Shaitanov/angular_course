import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductService} from "./services/products.service";
import {Observable, tap} from "rxjs";


@Component({
  selector: 'app-root', // Название компонента для шаблона
  templateUrl: './app.component.html', // Ссылка на шаблон компонента
  styleUrls: ['./app.component.css'] // Ссылка на стили компонента
})

// OnInit - реализация одного из этапов жизненного цикла компонента
export class AppComponent implements OnInit{
  title = 'Angular Course';
  loading = false
  // products: IProduct[] = []  1 лодход
  products$: Observable<IProduct[]> // 2 подход (работа со стримом)

  constructor(private productsService: ProductService) {
  }

  // Функция выполнится при инициализации компонента
  ngOnInit(): void {
    this.loading = true;

    // 1 подход
    // this.productsService.getAll().subscribe(products => {
    //   // Записываем значение
    //   this.products = products;
    //   this.loading = false;
    // })

    // 2 подход (работа со стримом)
    this.products$ = this.productsService.getAll().pipe(
      // Оператор tap никак не трансформирует данные и просто добавляет функционал
      tap(()=> this.loading = false)
    )
  }
}
