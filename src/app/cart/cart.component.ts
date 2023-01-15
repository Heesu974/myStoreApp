import { Component,Input } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { TestCartService } from '../test-cart.service';
import { observable, Observable } from 'rxjs';

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
}





