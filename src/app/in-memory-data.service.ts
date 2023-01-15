import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products:Product[] = [
      {
        id: 1,
        product: 'LG',
        price: 2000,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non sapien consectetur, iaculis turpis quis, imperdiet sem. Nam lobortis lacinia nulla sed laoreet. Sed eget tempus nisl. Integer nec commodo arcu. Quisque augue  erat. Donec eu est sapien. Etiam vel ex eu nulla pretium cursus.',
        imagePath:
          'https://th.bing.com/th/id/OIP.JRelJXwR2gwuGUU4-G0cCAHaFh?w=246&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      },
      {
        id: 2,
        product: 'SANSUNG',
        price: 2000,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non sapien consectetur, iaculis turpis quis, imperdiet sem. Nam lobortis lacinia nulla sed laoreet. ornare felis in scelerisque condimentum. Etiam neque augue, efficitur a lacinia id, vulputate a erat. Donec eu est sapien. Etiam vel ex eu nulla pretium cursus.',
        imagePath:
          'https://th.bing.com/th/id/OIP.UonkhvjywSquHkPp4g00lAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      },
      {
        id: 3,
        product: 'RIDI BOOKS',
        price: 100,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non sapien consectetur, iaculis turpis quis, imperdiet sem. Nam lobortis lacinia nulla s.',
        imagePath:
          'https://th.bing.com/th/id/OIP.bdkkiLn9v5NIHp014oiZlQAAAA?w=165&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      },
      {
        id: 4,
        product: 'Lenovo',
        price: 150,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non sapien consectetur, iaculis turpis quis, imperdiet sem. Nam lobortis lacinia nulla s.',
        imagePath:
          'https://th.bing.com/th/id/OIP.YkMHxTjqSG0QLX4uuj3HAQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      },
      {
        id: 5,
        product: 'BlackBerry',
        price: 300,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non sapien consectetur, iaculis turpis quis, imperdiet sem. Nam lobortis lacinia nulla s.',
        imagePath:
          'https://th.bing.com/th/id/OIP.3Pw4IEvtWMPHABKxUEhAMgHaFj?w=257&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7',
      },
    ];
    let shippingCosts:{type:string, price:number}[] = [

        {
          "type": "Overnight",
          "price": 25.99
        },
        {
          "type": "2-Day",
          "price": 9.99
        },
        {
          "type": "Postal",
          "price": 2.99
        }

      
    ]
    let cart:Product[] = [
      
    ];

    return { products, cart, shippingCosts };
  }
}
