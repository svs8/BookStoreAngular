import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _http:HttpClient) { }

  saveWishList(wishlist:any){
    return this._http.post("http://localhost:8082/wishlist/save",wishlist);
  }
  getAllWishlistRecords(){
   return this._http.get("http://localhost:8082/wishlist/retrieveAll");
  }
  getWishlistRecordById(Id:any){
    return this._http.get("http://localhost:8082/wishlist/retrieve/"+Id);
   }
   getWishlistRecordByBookId(Id:any){
    return this._http.get("http://localhost:8082/wishlist/retrieveByBookId/"+Id);
   }
   getWishlistRecordByUserId(Id:any){
    return this._http.get("http://localhost:8082/wishlist/retrieveByUserId/"+Id);
   }
   deleteWishlistRecordById(Id:any){
    return this._http.delete("http://localhost:8082/wishlist/delete/"+Id);
   }
}
