import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/BookStoreService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
   constructor(private router: Router, private userService: UserService) { }


   email!: string;
 

   password!: string;
 

   status: any;
 
   userId!: any
 
   // Token to set in request param
   token!: string;
   ngOnInit(): void {
 
   }
 
   // On Submit checks whether the login credentials are correct or not if correct then redirects to home page 
   submitTestLoginStatus() {
     this.userService.getloginStatus(this.email, this.password).subscribe((getData: any) => {
       this.status = getData;
     });
     if (this.status == 1) {
       alert("Login sucussfull!! , Please wait you are redirected to Home page");
       
       this.userService.getToken(this.email).subscribe((data: any) => {
         this.token = data.data;
         console.log(this.token);
         this.router.navigate(["home", this.token]);
       });
     }
     if (this.status == 0) {
       console.log("invalid user email");
       alert("invalid email");
     }
     if (this.status == 2) {
       console.log("invalid user password");
       alert("invalid password");
     }
     if(this.status==3){
      console.log("user not verified");
      alert("User not verified");
     }
 
 
   }
 

   onClickRedirectToRegister() {
     this.router.navigate(["register"]);
   }
 
 
   onClickGotoForgotPassword() {
     this.router.navigate(["forgotpassword"]);
   }

   onClickRedirectToVerification(){
    this.router.navigate(["verification"]);
  }
   }
 


