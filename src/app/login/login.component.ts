import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor (private fb:FormBuilder,private api:ApiService,private router:Router){}

  loginForm=this.fb.group({

    email:['',[Validators.pattern('[a-zA-Z0-9@.]*')]],
   password:['',[Validators.pattern('[a-zA-Z0-9]*')]],
  })
  
  //control passes through the html
  login(){
    if(this.loginForm.valid){
      
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    const user ={email,password}
    this.api.loginAPI(user).subscribe({
      next:(data:any)=>{
        console.log(data);
        const token = data.token
        alert("Login successfull....")
        sessionStorage.setItem("token", token)
        this.router.navigateByUrl('/')

    },
    error:(data:any)=>{
      console.log(data);
      
    }
 
        
      }
    )
    alert("Login Successfull")
    }else{
      alert("Invalid Details")
    }
    
  }
}
