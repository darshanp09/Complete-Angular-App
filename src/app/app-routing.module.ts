import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrderComponent} from './order/order.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {ProductComponent} from './products/product.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductRouterGuard} from './products/router-guard/product-routerGuard';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', canActivate: [ProductRouterGuard], component: ProductDetailComponent},
  {path: 'order', component: OrderComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [ProductRouterGuard],
  exports: [RouterModule]
})

export class AppRoutingModule {}
