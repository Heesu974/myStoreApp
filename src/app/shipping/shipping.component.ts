import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts!: {type:string, price:number}[];

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.getShippingCosts();
   
  }

  getShippingCosts():void{
    this.cartservice.getShippingCost().subscribe((resultCosts) => this.shippingCosts = resultCosts)
  }
}
