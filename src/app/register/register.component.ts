import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor (private fb:FormBuilder, private api:ApiService,private router:Router){}

registerForm=this.fb.group({
  username:['',[Validators.pattern('[a-zA-Z]*')]],
  email:['',[Validators.pattern('[a-zA-Z0-9@.]*')]],
 password:['',[Validators.pattern('[a-zA-Z0-9]*')]],
})

//control passes through the html
register(){
  if(this.registerForm.valid){
    const username = this.registerForm.value.username
  const email = this.registerForm.value.email
  const password = this.registerForm.value.password
  const user = {username,email,password}
  this.api.registerAPI(user).subscribe({
    next:(data:any)=>{
      console.log(data);
      alert("Register success")
      this.router.navigateByUrl('/user/login')

    },error:(data:any)=>{
      console.log(data);
      
    }
  })
  alert("Registration Successfull")
  }else{
    alert("Invalid Details")
  }
  
}
}
