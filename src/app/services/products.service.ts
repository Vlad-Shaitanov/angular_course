import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  // Сервис будет автоматически зарегистрирован в корневом модуле
  providedIn: 'root'
})

export class ProductService {
  constructor(private  http: HttpClient) {
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
      delay(2000)
    )
  }
}
