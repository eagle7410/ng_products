interface ItemListInterface {
  data : any[];
  type : number;
  addProductFromResponse(data: any, parent: any);
  addDataFromResponse(title: string, data: any, parent: any);
  isEmpty ();
  getItems(weightSortAbs: any);
  isListCategories();
  addItem(item: any);
}

export {ItemListInterface}
