import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { HeaderComponent } from './Component/header/header.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Component/home/home.component';
import { VerifyotpComponent } from './Component/verifyotp/verifyotp.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './Component/cart/cart.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { UserDetailsToPlaceOrderComponent } from './Component/user-details-to-place-order/user-details-to-place-order.component';
import { OrdersummaryComponent } from './Component/ordersummary/ordersummary.component';
import { OrderplacedComponent } from './Component/orderplaced/orderplaced.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ForgotpasswordComponent,
    HomeComponent,
    VerifyotpComponent,
    CartComponent,
    WishlistComponent,
    UserDetailsToPlaceOrderComponent,
    OrdersummaryComponent,
    OrderplacedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
