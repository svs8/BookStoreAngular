import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

 getUserByUserId(id:any){
   return this.http.get("http://localhost:8082/user/getuserById/"+id);
 
 }

getloginStatus(email:string, password:string){
   return this.http.get("http://localhost:8082/user/login?email="+email+"&password="+password);
 }

 getUserIdByToken(token:any){
   return this.http.get("http://localhost:8082/user/getIdByToken/"+token);
 }
 
 getToken(email:string){
   return this.http.get("http://localhost:8082/user/getToken/"+email);
 }

 getUserId(email:string){
   return this.http.get("http://localhost:8082/user/getuserid?email="+email);
 }
 registerUser(userRegistrationModel:any){
   return this.http.post("http://localhost:8082/user/register",userRegistrationModel);
 }

 verifyOtp(email:string, otp:number){
  return this.http.get("http://localhost:8082/user/verifyotp?email="+email+"&otp="+otp);
}

 forgotPasswordUser(email:string, newPassword:string): Observable<any>{
   return this.http.get("http://localhost:8082/user/forgotpassword?email="+email+"&newPassword="+newPassword);
 }

 updateUserRecordById(Id:any,user:any){
   return this.http.put("http://localhost:8082/user/update/"+Id,user);
 }
}
