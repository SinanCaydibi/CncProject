import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/service/user.service';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userList:any;
  form:any;
  submitted = false;
  constructor(private userService:UserService , private fb:FormBuilder) {
    this.form=fb.group({
      "name":['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)]]
      ,
      "surname":['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)]],
      "password":['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
   
        
      
      ]],
      "email":['',[
        Validators.required,
        Validators.email
      
      ]],
      "gender":['',[
        Validators.required
      
      ]],
     
    })
   }

   get UserComponent(){

    return this.form.controls;
   }

  // addUsers = new FormGroup({
  //   name:new FormControl('',[Validators.required]),
  //   surname:new FormControl(''),
  //   password:new FormControl(''),
  //   age:new FormControl(''),
  //   gender:new FormControl(''),

  // } );



  ngOnInit(): void {
   
  }


  SaveData(){
    this.userService.postUsers(this.form.value).subscribe((result)=>{
      
      
    });
    this.form.reset();
  
  }
 


}
