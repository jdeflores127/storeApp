import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../../productos/model/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  constructor() { }

  getProducts(category_id?: string){
    let url = new URL('https://api.escuelajs.co/api/v1/products');

    if(category_id){
      url.searchParams.set('categoryId',category_id);
    }

    return this.httpClient.get<Product[]>(url.toString());  
  }
  
  getProductById(id: string){
    return this.httpClient.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);  
  }
}
