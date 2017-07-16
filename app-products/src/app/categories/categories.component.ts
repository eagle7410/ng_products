import {Component, Input} from '@angular/core'
import {CategoryInterface} from '../_models'

@Component({
  moduleId: module.id,
  selector: 'categories',
  templateUrl: 'categories.component.html',

})

export class CategoriesComponent {
  @Input() categories: CategoryInterface[];
}
