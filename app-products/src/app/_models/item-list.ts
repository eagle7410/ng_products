import {objectKeys, isObject} from '../_helpers/object'
import {Category, Product, ItemListInterface} from './index'
import {typeProducts, typeCategory } from '../_const'

class ItemList implements ItemListInterface{
  data : any[] = [];
  type : number;

  getItems(weightSortAbs: any) {
    if (weightSortAbs === null) {
        return this.data;
    }

    return this.data.sort((a:any, b:any) => {
        if (weightSortAbs) {
            return b.weight - a.weight;
        }

        return a.weight - b.weight;
    });

  }

  isListCategories() {
    return this.type === typeCategory;
  }

  isEmpty () {
    return this.data.length === 0;
  }

  addItem(item: any) {
      this.data.push(item);
  }

  addProductFromResponse(data: any, parent: any) {
    if (!isObject(data)) {
      return;
    }

    let product = new Product();
    product.title  = data.title;
    product.weight = data.weight;
    product.parent = parent;

    if (parent) {
      product.parent.addWeight(product.weight);
    }

    this.data.push(product);

  }

  addDataFromResponse(title: string, data: any, parent: any) {

    let category = new Category();
    category.title  = title;
    category.parent = parent;

    this.data.push(category);

    if (Array.isArray(data)) {
      category.list.type = typeProducts;
      data.forEach(product => category.list.addProductFromResponse(product, category));
      return;
    }

    category.list.type = typeCategory;

    const titles = objectKeys(data);

    if (!titles.length) {
      return;
    }

    titles.forEach(title => category.list.addDataFromResponse(title, data[title], category));

  }
}

export {ItemList}
