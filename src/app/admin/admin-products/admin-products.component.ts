import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  Products$;
  Products: any[];
  FilteredProducts: any[];

  constructor(productService:ProductService) { 
    //this.Products$ = productService.getAll();
    productService.getAll().subscribe(products=> this.FilteredProducts = this.Products = products);
  }

  ngOnInit() {
  }

  search(query){
    //console.log(query);
    this.FilteredProducts = (query) ?
    this.Products.filter(p=>p.title.includes(query)) : this.Products;
  }
}
