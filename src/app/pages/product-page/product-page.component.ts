import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  title = 'Angular Course';
  loading = false
  // products: IProduct[] = []  1 лодход
  // products$: Observable<IProduct[]> // 2 подход (работа со стримом)
  term = '' // Для поиска

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {
  }

  // Функция выполнится при инициализации компонента
  ngOnInit(): void {
    this.loading = true;

    // 1 подход
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    })

    // 2 подход (работа со стримом)
    // this.products$ = this.productsService.getAll().pipe(
    //   // Оператор tap никак не трансформирует данные и просто добавляет функционал
    //   tap(()=> this.loading = false)
    // )
  }

}
