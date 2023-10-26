import { Component , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);
  products:Product[]=[];
 ngOnInit() {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => {
    console.log(data)  
    this.products = data;
    });
   
 }
}
