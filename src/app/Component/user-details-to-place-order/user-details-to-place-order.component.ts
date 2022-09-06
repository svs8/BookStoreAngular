import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/BookStoreService/user.service';

@Component({
  selector: 'app-user-details-to-place-order',
  templateUrl: './user-details-to-place-order.component.html',
  styleUrls: ['./user-details-to-place-order.component.css']
})
export class UserDetailsToPlaceOrderComponent implements OnInit {

  
  user: any;
   
  usertoken: any = this.route.snapshot.paramMap.get('token');
 userId:any

 
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

 
  ngOnInit(): void {
 
    this.userService.getUserIdByToken(this.usertoken).subscribe((data:any)=>{
      this.userId=data.data.userId;  

      this.userService.getUserByUserId(this.userId).subscribe((getData: any) => {
        this.user = getData.data;
      });
    });
    

  }

 
  toHomePage() {
    this.router.navigate(["home",this.usertoken]);
  }

  
  updateUser() {
    // this.userService.updateUserRecordById(this.user.userId, this.user).subscribe(data => {
    //   this.router.navigate(["ordersummery",this.usertoken]);
    // })
    this.router.navigate(["ordersummery",this.usertoken]);
  }

}
