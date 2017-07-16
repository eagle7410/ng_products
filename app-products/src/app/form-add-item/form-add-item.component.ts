import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {typeCategory, typeProducts} from '../_const'
import {Category, Product} from '../_models'
@Component({
  moduleId: module.id,
  selector: 'form-add-item',
  templateUrl: 'form-add-item.component.html'
})

export class FormAddItemComponent implements OnInit {
  @Input() changeIn: any;
  @Output() addItem: EventEmitter<any> = new EventEmitter();
  typeCategory: number = typeCategory;
  typeProducts: number = typeProducts;
  weight: number;
  title: string;
  type: any;
  errorTitleMessage: string = '';
  ngOnInit() {

    if (this.changeIn && !this.changeIn.list.isEmpty()) {
      this.type = this.changeIn.list.isListCategories() ? typeCategory : typeProducts;
    } else {
      this.type = null;
    }
  }

  changeType() {
    if (this.type !== null) {
      this.type = parseInt(this.type);
    }

  }

  _validateFormData (form: any) {

    this.errorTitleMessage = '';

    if (this.type) {
      form.type = this.type;
    }

    if (!form.weight) {
      form.weight = 0;
    }

    if (!form.title) {
      this.errorTitleMessage = 'Название вводить обязательно';
      return false;
    }

    if (!this.changeIn.isUniquedTitle(form.title)) {
      this.errorTitleMessage = 'Название должно быть уникальным';
      return false;
    }

    if (!form.type) {
      return false;
    }

    return form;
  }

  submitForm(form: any) {
    form = this._validateFormData(form);

    if (!form) return;

    form.type = parseInt(form.type);
    form.title = form.title.trim();

    if (form.type === this.typeCategory) {
      let category = new Category();
      category.title = form.title;
      this.changeIn.addCategory(category);
      this.addItem.emit();
      return;
    }

    let product = new Product();
    product.title = form.title;
    product.weight = form.weight;
    this.changeIn.addProduct(product);
    this.addItem.emit();

  }

}
