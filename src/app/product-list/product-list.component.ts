import { Component } from '@angular/core';
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
  constructor(
    private responsive: BreakpointObserver,
    private _snackBar: MatSnackBar,
    private cartservice: CartService
  ) {}

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
    // this.products = this.cartservice.getProducts();
  }
}
