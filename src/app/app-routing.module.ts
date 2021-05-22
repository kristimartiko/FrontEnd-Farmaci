import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin/admin-guard.service';
import { AdminComponent } from './admin/admin.component';
import { UsermanagmentComponent } from './admin/usermanagment/usermanagment.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'home', component: HomeComponent},
    {path: 'purchases', component: PurchasesComponent},
    { path: 'admin', canActivate: [AdminGuard], children:[
      {path:'users', component: UsermanagmentComponent}      
  ] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }