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
  product: Product | undefined;
  products: Observable<Product[]> = this.cartservice.getProducts();

  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // this.product = this.products.find(
    //   (product) => product.id === productIdFromRoute
    // );
    console.log('products', this.products);
  }
}
