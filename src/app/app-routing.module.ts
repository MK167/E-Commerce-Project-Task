import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AllproductsComponent } from './Components/allproducts/allproducts.component';
import { CartComponent } from './Components/cart/cart.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductdetailsComponent } from './Components/productdetails/productdetails.component';
import { StartComponent } from './Components/start/start.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGGuard } from './Services/auth-g.guard';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', canActivate: [AuthGGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGGuard], component: AboutComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', canActivate: [AuthGGuard], component: CartComponent },
  { path: 'allproducts', canActivate: [AuthGGuard], component: AllproductsComponent },
  { path: 'favorite', canActivate: [AuthGGuard], component: FavoriteComponent },
  { path: 'productdetails/:id', canActivate: [AuthGGuard], component: ProductdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
