import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

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
  }
  /*======================================*/
  // form = new FormGroup({
  //   title: new FormControl<string>('', [
  //     // Как будет осуществляться валидация формы
  //     Validators.required,
  //     Validators.minLength(5)
  //   ])
  // })

  // constructor() {
  // }
  //
  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     title: new FormControl<string>('', [
  //       // Как будет осуществляться валидация формы
  //       Validators.required,
  //       Validators.minLength(5)
  //     ])
  //   })
  // }
  // get title() {
  //   return this.form.controls.title as FormControl
  // }
  //
  // submit() {
  //   console.log(this.form.value)
  // }
}
