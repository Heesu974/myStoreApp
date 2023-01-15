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
  
  isHandsetLandscape = false;
  durationInSeconds = 5;
  products!:Product[];
 

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
      this.callProducts();
      
     
      
  }

  callProducts():void{
    this.cartservice.getProducts().subscribe((products) => this.products = products);
  }
clickCart(product:Product):void {
    
  this.cartservice.updateCart(product).subscribe(() => console.log(product));
}

}
