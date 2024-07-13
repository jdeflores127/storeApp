import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import {Product} from '../../model/productos.model';
import { CartService } from '@shared/components/services/cart.service';
import { ProductsService } from '@shared/components/services/products.service';
import { CategoryService } from '@shared/components/services/category.service';
import { Category } from '@productos/model/category.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  products = signal<Product[]>([]);
  category = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productsService = inject(ProductsService);
  private categoryService = inject(CategoryService);

  @Input() category_id? : string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.productsService.getProducts()
    .subscribe({
      next: (producto) =>{this.products.set(producto)},
      error: (err) => {console.log('error al invocar',err)}
    })

    this.categoryService.getAll()
    .subscribe({
      next: (category) =>{this.category.set(category)},
      error: (err) => {console.log('error al invocar',err)}
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['category_id']){
      this.productsService.getProducts(this.category_id)
      .subscribe({
        next: (producto) =>{this.products.set(producto)},
        error: (err) => {console.log('error al invocar',err)}
      })
    }
  }

  /*Evento que se invoca en el componente hijo Product*/
  toCart(product: Product){
    // this.productsInCart.update( listaActual =>  [...listaActual, product] );
    // console.log('evento desde el hijo: '+product);

    //Llamado por servicio
    this.cartService.addToCart(product);
  }
}
