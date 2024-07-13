import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../../productos/model/productos.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(()=>{
    let cart = this.cart();
    return cart.reduce((acumulator, current) => acumulator+current.price,0);
    
  });

  constructor() { }

  addToCart(product : Product){
    this.cart.update(state => [...state,product]);
  }

}
