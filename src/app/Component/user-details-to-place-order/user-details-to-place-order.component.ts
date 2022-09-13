import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/BookStoreService/user.service';
import { DeliveryService } from 'src/app/BookStoreService/delivery.service';
import { DeliveryModel } from 'src/app/Model/Delivery-Model';

@Component({
  selector: 'app-user-details-to-place-order',
  templateUrl: './user-details-to-place-order.component.html',
  styleUrls: ['./user-details-to-place-order.component.css']
})
export class UserDetailsToPlaceOrderComponent implements OnInit {

  
   
usertoken: any = this.route.snapshot.paramMap.get('token');
 userId:any

 
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,private deliveryService: DeliveryService) { }

  user: DeliveryModel = new DeliveryModel("", "", "", "");

  ngOnInit(): void {
 
    // this.userService.getUserIdByToken(this.usertoken).subscribe((data:any)=>{
    //   this.userId=data.data.userId;  

    //   this.userService.getUserByUserId(this.userId).subscribe((getData: any) => {
    //     this.user = getData.data;
    //   });
    // });
  
  }

 
  toHomePage() {
    this.router.navigate(["home",this.usertoken]);
  }

  
  updateUser() {
    this.deliveryService.registerDeliveryDetails(this.user).subscribe((data: any) => {
      this.router.navigate(["ordersummery",this.usertoken]);
      
    })
  }

}
