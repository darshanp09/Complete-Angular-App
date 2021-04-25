import {NgModule} from '@angular/core';

import {productService} from './product.service';
import {ProductComponent} from './product.component';
import {MyUpperPipe} from './myupper.pipe';
import {discountPipe} from './discount.pipe';
import {ProductSearchPipe} from './productFilter.pipe';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    ProductComponent,
    MyUpperPipe,
    discountPipe,
    ProductSearchPipe
  ],
  providers: [productService]
})

export class ProductModule {}
