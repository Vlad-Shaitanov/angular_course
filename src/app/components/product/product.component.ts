import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";

@Component({
  // 2 обязательных параметра: название компонента для шаблона и шаблон
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent {
  // В какое свойство положить входящие в компонент данные (пропсы)
  @Input() product: IProduct

  // Состояние кнопки открытия деталей карточки
  details = false
}
