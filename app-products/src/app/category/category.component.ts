import {Component, Input, OnInit} from '@angular/core'
import {CategoryInterface} from '../_models'

 @Component({
  moduleId    : module.id,
  selector    : 'category',
  templateUrl : 'category.component.html',
})

export class CategoryComponent implements OnInit{
    @Input() data: CategoryInterface;
    isShowAddForm : boolean = false;
    isShowList    : boolean = false;
    isEmptyList   : boolean = false;
    weightSortAbs : boolean = null;

    ngOnInit () {
      this.isEmptyList = this.data.list.isEmpty();
    }
    changeWeightSort() {
        if (this.weightSortAbs === null) {
            this.weightSortAbs = true;
            return;
        }

        this.weightSortAbs = !this.weightSortAbs;
    }
    addItem() {
      this.isShowAddForm = false;
      this.isShowList    = true;
      this.isEmptyList   = false;
    }
    getItems() {

      return this.data.list.getItems(this.weightSortAbs);
    }
}
