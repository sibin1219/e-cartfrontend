import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
   allproducts :any=[]
product: any;
constructor(private api:ApiService){}

  ngOnInit(): void {                                      //button click chyathe fectch chyanam so oninit use chyum
   this.api.getAllProductsAPI().subscribe({
    next:(result:any)=>{
      console.log(result);//array of products
      this.allproducts = result
    },
    error:(err:any) => {
      console.log(err);
      
    }
   }
   
   )
  }


}
