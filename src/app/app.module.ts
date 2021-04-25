import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import { HeaderComponent } from './app.header';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductModule } from './products/product.module';
import {SharedModule} from './shared/shared.module';


@NgModule({

  // All the Module will be declare are
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    SharedModule, // Custom Module
    AppRoutingModule // Custom Module
  ]
  ,

  // All the component and pipe
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrderComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],

  // All Service
  providers: [],

  // Only First Component
  bootstrap: [AppComponent],
})

export class AppModule {

}

