import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartservice.getShippingCost();
    // 여기서 데이터 값을 반환시켜야 하는 거 중요
    // cartservice는 반환할 준비만 미리한다.
  }
}
