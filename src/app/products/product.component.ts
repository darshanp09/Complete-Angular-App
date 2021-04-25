import {Component, OnInit} from '@angular/core';
import {IProduct} from './product.model';
import {productService} from './product.service';

@Component({
  selector: 'app-prod',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  styles: [
    `.online{
      background-color: gray
  }`
  ]
})
export class ProductComponent implements OnInit{

  title: string = 'Products List';
  showImage: boolean = false;
  showTable: boolean = true;
  userInput: string = '';
  imageWidth: number = 100;
  serverStatus: string = 'Offline';
  products: IProduct[] | undefined;

  constructor(private productService: productService) {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( (data) => this.products = data);
  }



  getColor(): string {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  dataReceived(message: string): void{
    this.title = 'Product List >>> ' + message;
  }


}
