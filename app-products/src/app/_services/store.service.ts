import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'


@Injectable()
export class ProductsService {
  private urlProducts : string = 'products-.json';

  constructor(private http: Http) {
  }

  all(): Observable<Response> {

    return this.http.get(this.urlProducts)
      .map((response: Response) => response.json());

  }

}
