import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  {
    path: '', 
    // pathMatch:"full", 
    component: HomeComponent
  },
  {
    path: 'products', component: HomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'sale', component: SaleComponent
  }
  ,
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'blog', component:BlogComponent
  },
  {
    path: 'shop', component:ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
