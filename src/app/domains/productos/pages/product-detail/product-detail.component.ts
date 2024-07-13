import { Component, inject, Input, signal } from '@angular/core';
import { ProductsService } from '@shared/components/services/products.service';
import { Product } from '../../model/productos.model';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/components/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  /*Para pasar parametros dinamicamente, podemos usar properties y añadir al app.config un withCOmponentInputBinding */
  @Input({required:true}) id? : string; 
  product = signal<Product|null>(null);
  cover = signal<string | null>(null);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.id){
      this.productsService.getProductById(this.id)
      .subscribe({
        next: (producto) =>{
          this.product.set(producto);
          this.cover.set(producto.images[0]);
        },
        error: (err) => {console.log('error al invocar',err)}
      });
    }

  }

  changeCover(img: string) {
    this.cover.set(img);
  }

  addToCar(){
    let producto = this.product();
    if(producto){
      this.cartService.addToCart(producto);
    }
  }

}
