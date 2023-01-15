import { Component,Input } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { TestCartService } from '../test-cart.service';
import { observable, Observable } from 'rxjs';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items: Product[] = [];

 

    constructor(
    private cartservice: CartService
  ) 
  {}

      

  ngOnInit():void {
    this.getCart();
   
    
  }
  getCart():void {
    this.cartservice.getCart().subscribe(observableData => this.items = observableData);
  }

  clickCart(product:Product):void {
    
    this.cartservice.updateCart(product).subscribe(() => console.log(product));
  }

}





