import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { VerifyotpComponent } from './Component/verifyotp/verifyotp.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"home/:token",component:HomeComponent},
  {path:"verification",component:VerifyotpComponent},
  {path:"cart",component:CartComponent},
  {path:"cart/:token",component:CartComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"wishlist/:token",component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
