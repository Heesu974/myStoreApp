import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Observable<Product[]> = this.cartservice.getProducts();
  isHandsetLandscape = false;
  durationInSeconds = 5;
  product!: Product;

  
  constructor(
    private responsive: BreakpointObserver,
    private _snackBar: MatSnackBar,
    private cartservice: CartService
  ) {}

  clickCart(product:Product):void {
    console.log('장바구니 담기가 클릭 됨')
    this.cartservice.updateCart(product).subscribe((product) => {
      console.log('updateCart 서비스가 읽힘')
      this.product = product;
    });
  }
  


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 400,
    });
  }
  addToCart(product: Product) {
    this.cartservice.getIntoCart(product);
  }
  ngOnInit() {
    this.responsive
      .observe(Breakpoints.HandsetLandscape)
      .subscribe((result) => {
        this.isHandsetLandscape = false;
        if (result.matches) {
          console.log('screens matches HandsetLandscape');
          this.isHandsetLandscape = true;
        }
      });
      this.clickCart(this.product);
  }

}
