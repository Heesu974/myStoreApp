import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: Product;
  

  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    if(productIdFromRoute){
      this.callMatchedProduct(productIdFromRoute);
    }
    
   
  }

  callMatchedProduct(productId:number):void {
    this.cartservice.findProduct(productId).subscribe((matchedProduct) => this.product = matchedProduct);
    //여기서 부터
  }
}
