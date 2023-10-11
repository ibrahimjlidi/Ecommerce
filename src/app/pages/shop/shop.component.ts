import { Component, OnInit } from '@angular/core';
import { Product } from './product.model'; // Assuming you have a Product interface
import { ProductService } from 'src/app/services/product.service';
// import { ProductService } from './product.service'; // Import your ProductService

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((result: any)=>{
      this.products = result.data;
    })
  }
}
