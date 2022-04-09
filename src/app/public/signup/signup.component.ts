import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    let userDetails =  this.signupForm.value
    userDetails.userType = 1000
    console.log(userDetails)
    this.userService.registerUser(userDetails).subscribe((res) => {
      this.signupForm.reset({})
      console.log(res)
    })
  }

}
