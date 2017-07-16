import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {ProductsService}  from '../_services'
import {Store, StoreInterface} from '../_models'

@Component({
  moduleId: module.id,
  templateUrl: 'store.component.html',
})

export class StoreComponent implements OnInit{
  model : StoreInterface;
  loading: boolean;
  error = '';

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) {
    this.loading = true;
    this.model = new Store();
  }

  ngOnInit() {
    this.productsService.all()
      .subscribe(data => this.model.addResponse(data), err => {
        console.log('!!!Error get all productions', err);
        this.error = 'Error get productions.';
        this.loading = false;
      },
        () => {this.loading = false}
      );
  }


}
