import { Component, EventEmitter, Input, Output, signal, computed, SimpleChanges, inject } from '@angular/core';
import { Product } from '../../../productos/model/productos.model';
import { CartService } from '../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //Injectar un servicio
  private cartService = inject(CartService);

  hideSignal = signal(false);
  // @Input() productsInCart : Product[] = [];
  /*Los inputs no son si9gnals, por lo tanto, no ejecutan las propiedades computadas */
  productsInCart = this.cartService.cart;
  total = this.cartService.total;

  // productsInCartgroupedByNumber = computed(
  //   ()=>{

  //     let productsInCartComp = this.productsInCartSignal();

  //     let mapProducts = productsInCartComp.reduce((acumulator,current) => {

  //       if(acumulator.has(current)){
  //         let acum = acumulator.get(current)+1;
  //         acumulator.set(current, acum)
  //       }else{
  //         acumulator.set(current, 1)
  //       } 
  //       return acumulator;

  //     },new Map());

  //     return mapProducts;
  //   }
  // );

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   if(changes['productsInCart']){
  //     //this.productsInCartSignal.set(changes['productsInCart'].currentValue);
  //     this.total.set(this.calculateTotal());      
  //     console.log(changes);
  //   }
  // }

  toggleSideBar() {
    this.hideSignal.update(value => !value);
  }

  // calculateTotal(){
  //   return this.productsInCart.reduce((acumulator, current) => acumulator+current.price,0);
  // }
}
