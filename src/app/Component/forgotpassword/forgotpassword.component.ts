import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/BookStoreService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private route:Router,private userService:UserService) { }

  
  email!:string;
  newPassword!:string;

  ngOnInit(): void {
  
  }


  
  onlogin(){
    this.userService.forgotPasswordUser(this.email,this.newPassword).subscribe((getData: any) =>{
      console.log(getData);
    });
    alert("Password Updated Successfully please login using new password");
    this.route.navigate(["login"]);
  }


}
