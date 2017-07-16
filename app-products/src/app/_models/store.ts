import {objectKeys} from '../_helpers/object'
import {Category, Product, ItemList, ItemListInterface} from './index'
import {typeCategory} from '../_const'

interface StoreInterface {
  list : ItemListInterface;
  addResponse(data: any);
  isEmpty ();
}

class Store implements StoreInterface {
  list: ItemListInterface;

  constructor () {
    this.list = new ItemList();
  }

  addResponse (data: Object) {

    const titles = objectKeys(data);

    if (!titles.length) {
      return false;
    }

    for (let i = 0; i<titles.length; ++i) {
      let title = titles[i];
      this.list.addDataFromResponse(title, data[title], null);
      this.list.type = typeCategory;
    }

  }

  isEmpty () {
    return this.list.isEmpty();
  }

}

export {Store, StoreInterface};
