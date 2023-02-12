import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, throwError, tap} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorService} from "./error.service";

@Injectable({
  // Сервис будет автоматически зарегистрирован в корневом модуле
  providedIn: 'root'
})

export class ProductService {
  constructor(
    private  http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  products: IProduct[] = []

  getAll(): Observable<IProduct[]>{
    return  this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {
          limit: 10
        }
      })
    }).pipe(
      // Реализация программной задержки на запросе
      delay(2000),
      // Повторить запрос 2 раза в случае, если он выполнен с ошибкой
      retry(2),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(product: IProduct): Observable<IProduct>{
    // Создание нового продукта
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(item => this.products.push(item))
      );
  }

  // Приватный обработчик ошибок для запроса
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(()=> error.message)
  }
}
