import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/BookStoreService/cart.service';
import { WishlistService } from 'src/app/BookStoreService/wishlist.service';
import { CartModel } from 'src/app/Model/cart-model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  
 wishlist!: any;
 
 imagePath = "../../../assets/bookimg/"
 
 mycart: CartModel = new CartModel(0, 0, 1);

 token=this.route.snapshot.paramMap.get('token')


 toHomePage() {
   this.router.navigate(["home",this.token]);
 }



 constructor(private wishService: WishlistService, private router: Router, private cartService: CartService,private route:ActivatedRoute) { }

 
 ngOnInit(): void {
   this.getAllWishList();
 }

 
 getAllWishList() {
   this.wishService.getAllWishlistRecords().subscribe((data: any) => {
     if (data.data.length == 0) {
       this.router.navigate(["home",this.token]);
     }
     this.wishlist = data;
   })
 }


 
 deleteWishlist(wishlistId: any) {
   this.wishService.deleteWishlistRecordById(wishlistId).subscribe(data => {
     window.location.reload();
   });

 }

 
 addToBag(bookId: any, userId: any, wishlist: number) {
   this.mycart.bookId = bookId;
   this.mycart.userId = userId;
   this.cartService.saveCart(this.mycart).subscribe(data => {
     console.log(data);
   });
   this.deleteWishlist(wishlist);
   this.router.navigate(["cart",this.token]);

 }

}
