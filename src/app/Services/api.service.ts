
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
server_url = 'http://localhost:3000'
 



constructor(private http:HttpClient) { }

getAllProductsAPI(){
  
  return this.http.get(`${this.server_url}/allproducts`)
   }
   
viewAProductAPI(id:any){
  return this.http.get(`${this.server_url}/viewProduct/${id}`)
}

registerAPI(body:any){
  return this.http.post(`${this.server_url}/user/register`,body)
}

loginAPI(body:any){
  return this.http.post(`${this.server_url}/user/login`,body)
}

appendToken(){
  let headers = new HttpHeaders()
  const token = sessionStorage.getItem('token')
  console.log(token);
  if(token){
    headers=headers.append('Authorization',`Bearer ${token}`)
  }
  return {headers}

}
addToWishlist(product:any){
  return this.http.post(`${this.server_url}/addToWishlist`,product,this.appendToken())
}

getWishlist(){
  return this.http.get(`${this.server_url}/getWishlist`,this.appendToken())
}
deleteWishlist(id:any){
  return this.http.delete(`${this.server_url}/deletewishlist/${id}`,this.appendToken())
}

addToCart(product:any){
  return this.http.post(`${this.server_url}/addCart`,product,this.appendToken())
}
getCart(){
  return this.http.get(`${this.server_url}/getCart`,this.appendToken()) 
}
deleteCart(id:any){
  return this.http.delete(`${this.server_url}/deleteCart/${id}`,this.appendToken())
}
incrementCart(id:any){
  return this.http.get(`${this.server_url}/incrementCart/${id}`,this.appendToken())
}
decrementCart(id:any){
  return this.http.get(`${this.server_url}/decrementCart/${id}`,this.appendToken())
}
}
