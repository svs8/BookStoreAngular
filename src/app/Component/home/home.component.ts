import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/BookStoreService/book.service';
import { CartService } from 'src/app/BookStoreService/cart.service';

import { UserService } from 'src/app/BookStoreService/user.service';
import { WishlistService } from 'src/app/BookStoreService/wishlist.service';
import { CartModel } from 'src/app/Model/cart-model';
import { Wishlist } from 'src/app/Model/wishlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  
  books: any;
  
  imagePath = "../../../assets/bookimg/"
 // object to store the cart model
 myCart: CartModel = new CartModel(0, 0, 0);

 myWishlist: Wishlist = new Wishlist(0, 0, 1);

 
 carts!: any;
 
  sortby!: string;

  search: any;

  wishlists: any
 
  userToken = this.getRoute.snapshot.paramMap.get("token");

  
  userId: any;

  constructor(private wishService: WishlistService,private route: Router, private userService: UserService, private bookService: BookService, private cartService: CartService, private getRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.sortby = "default"

    
    this.userService.getUserIdByToken(this.userToken).subscribe((data: any) => {
      this.userId = data.data;
    });

   
    this.getAllBooks();

   
    this.getAllCart();

    this.getAllWishList();


  }

  getAllWishList() {
    this.wishService.getAllWishlistRecords().subscribe(data => {
      this.wishlists = data;

    })
  }

 
 
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((getData: any) => {
      this.books = getData;
    });
  }

  getAllCart() {
    this.cartService.getAllCarts().subscribe(mydata => {
      this.carts = mydata;
    });
  }

  
  //when the user hits the "Add To Cart Button" ,It check's that book is already  present in the cart or not If book is present in the cart then it shows the alert in the home that book is already present else it saves the book to the cart repository in 
  addToCart(bookId: number) {
    let i = 0
    if (this.carts.data != 0) {//Checking if thecart is empty
      for (; i < this.carts.data.length; i++) {//checking till n-1
        if (this.carts.data[i].book.bookId == bookId) {
          alert("book is already in cart");

          break;
        }
      }

      if (i == this.carts.data.length) {//in the nth 
        this.myCart.bookId = bookId;
        this.myCart.userId = this.userId;
        this.myCart.quantity = 1;
        this.cartService.saveCart(this.myCart).subscribe((getdata: any) => {
          this.carts = getdata;
          window.location.reload();

        });
      }
    } else {//if no data in cart adds the items
      this.myCart.bookId = bookId;
      this.myCart.userId = this.userId
      this.myCart.quantity = 1;
      this.cartService.saveCart(this.myCart).subscribe((getdata: any) => {
        this.carts = getdata;
        window.location.reload();
      });
    }
  }



  
  sort() {
    if (this.sortby == "Increasing") {
      this.bookService.sortBookInAscending().subscribe((data: any) => {
        this.books = data;

      });
    } if (this.sortby == "Decreasing") {
      this.bookService.sortBookInDescending().subscribe((data: any) => {
        this.books = data;

      });
    } if (this.sortby == "Sort By Relevance") {
      this.bookService.getAllBooks().subscribe((data: any) => {
        this.books = data;

      });
    }
  }

 
  searchByBookname() {
    if (this.search != '') {
      this.bookService.searchBookByName(this.search).subscribe((getData: any) => {
        this.books = getData;
      });
    }
    else {
      this.ngOnInit();
    }
  }

  
   toCartOnClickAddtoBag() {
    this.route.navigate(["cart", this.userToken]);
  }


  

 
  tologinPage() {
    this.route.navigate(["login"]);

  }

  wishlist() {
    this.route.navigate(["wishlist", this.userToken]);
  }

  addToWishList(bookId: number) {
    let i = 0
    if (this.wishlists.data != 0) {//Checking if book present in wishlist
      for (; i < this.wishlists.data.length; i++) {//Check till n-1
        if (this.wishlists.data[i].book.bookId == bookId) {
          alert("book is already in WISHLIST");
          console.log("cons 0")
          break;
        }
      }
      if (i == this.wishlists.data.length) {
        this.myWishlist.bookId = bookId;
        this.myWishlist.userId = this.userId
        this.myWishlist.quantity = 1;
        this.wishService.saveWishList(this.myWishlist).subscribe((getdata: any) => {
          this.carts = getdata;
          window.location.reload();
        });
      }
    } else {
      this.myWishlist.bookId = bookId;
      this.myWishlist.userId = this.userId
      this.myWishlist.quantity = 1;
      this.wishService.saveWishList(this.myWishlist).subscribe((getdata: any) => {
        this.wishlists = getdata;
        window.location.reload();
      });
    }
  }

}