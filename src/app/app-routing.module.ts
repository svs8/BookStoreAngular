import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { OrderplacedComponent } from './Component/orderplaced/orderplaced.component';
import { OrdersummaryComponent } from './Component/ordersummary/ordersummary.component';
import { RegisterComponent } from './Component/register/register.component';
import { UserDetailsToPlaceOrderComponent } from './Component/user-details-to-place-order/user-details-to-place-order.component';
import { VerifyotpComponent } from './Component/verifyotp/verifyotp.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"home/:token",component:HomeComponent},
  {path:"verification",component:VerifyotpComponent},
  {path:"cart",component:CartComponent},
  {path:"cart/:token",component:CartComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"wishlist/:token",component:WishlistComponent},
  {path:"update/:token",component:UserDetailsToPlaceOrderComponent},
  {path:"update/:useremail",component:UserDetailsToPlaceOrderComponent},
  {path:"update",component:UserDetailsToPlaceOrderComponent},
  {path:"ordersummery/:token",component:OrdersummaryComponent},
  {path:"orderplaced/:token",component:OrderplacedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
