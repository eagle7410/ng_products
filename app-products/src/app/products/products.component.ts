import {Component, Input} from '@angular/core'
import {ProductInterface} from '../_models'

@Component({
  moduleId    : module.id,
  selector    : 'products',
  templateUrl : 'products.component.html',
})

export class ProductsComponent {
  @Input() products: ProductInterface[];
}
