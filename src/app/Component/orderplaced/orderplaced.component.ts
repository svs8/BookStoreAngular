import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/BookStoreService/order.service';
import { UserService } from 'src/app/BookStoreService/user.service';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {

  
  order: any;
  token=this.route.snapshot.paramMap.get("token")

  
  constructor(private router: Router, private orderService: OrderService, private userService: UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {

   
    this.orderService.getAllOrders().subscribe((getData: any) => {
      this.order = getData;
      console.log("the order is :",this.order)
    })

   

  }

  
  toHomePage() {
    this.router.navigate(["home",this.token]);
  }

  goToDashboard() {
    this.router.navigate(["home",this.token]);

  }
  ngOnDestroy() {
    for (let i = 0; i < this.order.data.length; i++) {
      this.orderService.deleteOrderRecordById(this.order.data[i].orderID).subscribe(data => {
      });
    }
  }

}
