import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {
  }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value)

    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 45,
        count: 2
      }
    }).subscribe(()=>{
      // Закрываем модалку при успешном создании нового продукта
      this.modalService.close();
    })
  }
}
