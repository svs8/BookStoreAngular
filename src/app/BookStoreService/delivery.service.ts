import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http:HttpClient) {
  }

  registerDeliveryDetails(DeliveryModel:any){
    return this.http.post("http://localhost:8082/delivery/register",DeliveryModel);
  }

  getAllDeliveryDetails(){
    return this.http.get("http://localhost:8082/delivery/getAll");
  }

  deletedeliveryDetails(Id:any){
    return this.http.delete("http://localhost:8082/delivery/deleteDeliveryDetails/"+Id);
  }
}
