import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  Categories$;
  Product = {};
  id;

  constructor(
    categoryService:CategoryService,
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router) { 
    this.Categories$ = categoryService.getCategory();

    this.id= this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(product=> this.Product = product);
  }

  ngOnInit() {
  }
 
  save(product)
  {
    if(this.id) this.productService.update(this.id, product)
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(confirm("Are you sure want to delete this product ?")){
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);    
    }
    
  }
}
