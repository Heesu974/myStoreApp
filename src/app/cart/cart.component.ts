import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { TestCartService } from '../test-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartservice.showProductsInCart();
  // testCart = this.testcartservice.getDataInCart();
  constructor(
    private cartservice: CartService
  ) // private testcartservice: TestCartService
  {}
}
