import { ItemListInterface } from './index'

interface CategoryInterface {
  title  : string;
  weight : number;
  parent : any;
  list   : ItemListInterface;
  addWeight (weight : number);
  addCategory(category:any);
  addProduct(product:any);
}
export {CategoryInterface};
