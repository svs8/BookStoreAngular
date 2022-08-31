import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/BookStoreService/user.service';
import { UserRegistrationModel } from 'src/app/Model/user-registration-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status!: number;


  constructor(private router: Router, private service: UserService) { }


  userModel: UserRegistrationModel = new UserRegistrationModel("", "", "", "","",new Date,new Date);

  ngOnInit(): void {
  }

  
  onClickSaveModelRedirectToHome() {
    this.service.registerUser(this.userModel).subscribe((getData: any) => {
    console.log(getData.data);
    this.status = getData.data;
    if(this.status == 1){
      alert("This Email id has Already been Taken. Enter new Email Id and try Again.");
      this.router.navigate(["register"]);
    }
   if(this.status == 0){
    alert("Registraion done. Please Check your email for otp and Verify the Account.");
    this.router.navigate(["verification"]);
  }
    });

  }


 
  loginPage() {
    this.router.navigate(["login"]);
  }


}
