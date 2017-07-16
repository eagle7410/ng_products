import {Component, Input} from '@angular/core'
import {ProductInterface} from '../_models'

@Component({
  moduleId    : module.id,
  selector    : 'product',
  templateUrl : 'product.component.html'
})

export class ProductComponent {
  @Input() data: ProductInterface;
  isShowChangeForm : boolean = false;
}
