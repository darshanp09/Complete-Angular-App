import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from '../product.model';
import { productService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number = 0;
  details: IProduct[] | undefined;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: productService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.service.getProductDetails(this.id).subscribe( data => {
      this.details = data;
    });

  }

  goBack(): void{
    this.router.navigate(['/product']);
  }

}

/*

  name: string | undefined;
  image: string | undefined;
  description: string | undefined;


  this.route.queryParams.subscribe((data) => {
      this.name = data.name;
      this.description = data.desc;
      this.image = data.img;
      });

 */
