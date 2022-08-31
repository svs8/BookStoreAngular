import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/BookStoreService/book.service';

import { UserService } from 'src/app/BookStoreService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  // Variable to store list of books
  books: any;
  // path to get the image
  imagePath = "../../../assets/bookimg/"

 
  sortby!: string;

  search: any;
 
   
  userToken = this.getRoute.snapshot.paramMap.get("token");

  
  userId: any;

  constructor( private route: Router, private userService: UserService, private bookService: BookService, private getRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.sortby = "default"

    
    this.userService.getUserIdByToken(this.userToken).subscribe((data: any) => {
      this.userId = data.data;
    });

    // To get the list of books from the data base this function is called when the home component is loaded
    this.getAllBooks();


  }

 
 
  getAllBooks() {
    this.bookService.getAllBooks().subscribe((getData: any) => {
      this.books = getData;
    });
  }



  //This function defines the logic of the sorting .
  sort() {
    if (this.sortby == "Increasing") {
      this.bookService.sortBookInAscending().subscribe((data: any) => {
        this.books = data;

      });
    } if (this.sortby == "Decreasing") {
      this.bookService.sortBookInDescending().subscribe((data: any) => {
        this.books = data;

      });
    } if (this.sortby == "default") {
      this.bookService.getAllBooks().subscribe((data: any) => {
        this.books = data;

      });
    }
  }





  // This function is triggred when the user hits the "search tab",
  // It searched the data on the basis of books name form the data-base through the service layer
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

  

  // This function is triggred when the user hits the "logout logo" in view, it redirects the user to the login component
  tologinPage() {
    this.route.navigate(["login"]);

  }
 

  
}