import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, throwError} from "rxjs";
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

  getAll(): Observable<IProduct[]>{
    return  this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {
          limit: 5
        }
      })
    }).pipe(
      // Реализация программной задержки на запросе
      delay(2000),
      // Повторить запрос 2 раза в случае, если он выполнен с ошибкой
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  // Приватный обработчик ошибок для запроса
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(()=> error.message)
  }
}
