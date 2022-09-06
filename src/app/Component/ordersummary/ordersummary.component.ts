import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/BookStoreService/cart.service';
import { OrderService } from 'src/app/BookStoreService/order.service';
import { OrderModel } from 'src/app/Model/order-Model';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService, private cartService: CartService,private route:ActivatedRoute) { }

  
  order: OrderModel = new OrderModel(0, "", 0, 0, 0, false);
  
  cart!: any

  imagePath = "../../../assets/bookimg/"

  token= this.route.snapshot.paramMap.get('token');

  ngOnInit(): void {
   
    this.cartService.getAllCarts().subscribe((data: any) => {
      this.cart = data;
      console.log("-----")
      console.log(this.cart);
    });
  }


  
  toHomePage() {
    this.router.navigate(["home",this.token]);
  }

  
  // It replicates the data of the books from the cart to the order table and routs the user to confirmation page
  checkout() {
    for (let i = 0; i < this.cart.data.length; i++) {
      this.order.userId =1 ;
      this.order.bookId = this.cart.data[i].book.bookId;
      this.order.quantity = this.cart.data[i].quantity;
      this.order.price = this.cart.data[i].book.price*this.order.quantity;
      console.log("The totel price  ",this.order.price)
      this.order.address = "Mangalore";
      this.order.cancel = false;
      this.orderService.postOrder(this.order).subscribe((getData: any) => {
        this.order = getData;
        console.log(this.order);

      });
      this.cartService.deleteCartByCartId(this.cart.data[i].cartId).subscribe(data => {
      });

    }
    this.router.navigate(["orderplaced",this.token])
  }

}
