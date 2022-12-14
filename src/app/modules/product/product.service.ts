import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: "p1",
        category: "k1",
        description: "opis ",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "p12",
        category: "k21",
        description: "opis 2",
        price: 11.99,
        currency: "PLN"
      },
      {
        name: "p13",
        category: "k13",
        description: "opis3 ",
        price: 11.99,
        currency: "PLN"
      }
    ]
  }
}
