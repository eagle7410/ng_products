import {ItemList, ItemListInterface, CategoryInterface} from './index'
import {Item} from './item'
import {typeCategory, typeProducts} from '../_const'

class Category extends Item implements CategoryInterface{
  list: ItemListInterface;

  constructor () {
    super();
    this.list = new ItemList();
  }

  addWeight (weight : number) {
    this.weight += weight;

    if (this.parent) {
      this.parent.addWeight(weight);
    }

  }

  addCategory(item:any) {
      item.title  = item.title.trim();
      item.parent = this;
      item.weight = 0;

      this.list.type = typeCategory;
      this.list.addItem(item);
  }

  addProduct(product:any) {
      product.title  = product.title.trim();
      product.parent = this;

      if (!product.weight) {
          product.weight = 0;
      }

      this.list.type = typeProducts;
      this.list.addItem(product);

      if (!product.weight) {
          return;
      }

      this.addWeight(product.weight);
  }

  isUniquedTitle (title: string) {
     for(let i =0; i<this.list.data.length; i++) {
         let item = this.list.data[i];

         if (item.title === title.trim()) {
             return false;
         }
     }

     return true;
  }
}

export {Category}
