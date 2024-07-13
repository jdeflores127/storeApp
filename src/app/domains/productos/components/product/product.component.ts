import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/productos.model';
import { HeaderComponent } from '@shared/components/header/header.component'
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@customPipe/reverse.pipe';
import { DateAgoPipe } from '@customPipe/date-ago.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReversePipe, DateAgoPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // @Input() imgUrl: string = '';
  // @Input({required:true}) price: number = 0;
  // @Input({required:true}) name: string = '';
  @Input({ required: true }) product!: Product;
  @Output() addToCar = new EventEmitter();

  addToCarHandler() {
    console.log('click al padre');
    this.addToCar.emit(this.product);
  }

}
