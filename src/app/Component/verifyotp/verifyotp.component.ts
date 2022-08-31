import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/BookStoreService/user.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  // To store the user entered  email for login from ng model
  email!: string;

  otp!: number;

  status!: any;


  ngOnInit(): void {

  }


verifyOtp() {
    this.userService.verifyOtp(this.email, this.otp).subscribe((getData: any) => {
      this.status = getData;
    });

    if (this.status == 1) {
      alert("Verification Successful , PLEASE proceed to login");
      this.router.navigate(["login"]);
    }
    
    if (this.status == 0) {
      console.log("invalid user email");
      alert("Invalid Email or email doesn't exist")
    }

    if (this.status == 2) {
      console.log("invalid user otp");
      alert("Invalid Otp")
    }

  }

  onClickRedirectToRegister() {
    this.router.navigate(["register"]);
  }

}
