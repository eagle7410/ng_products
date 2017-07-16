import {Item, ProductInterface} from './index'

class Product extends Item implements ProductInterface{
  setWeight (val:number) {
    let diff = val - this.weight;

    this.weight = val;

    if (this.parent) {
        this.parent.addWeight(diff);
    }

  }
}

export {Product};
