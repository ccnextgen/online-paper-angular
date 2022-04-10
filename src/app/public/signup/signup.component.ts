import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
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
    phoneNumber: new FormControl(''),
    city: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService: UserService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    
    let userDetails =  this.signupForm.value
    userDetails.userType = 1000
    console.log(userDetails)
    this.userService.registerUser(userDetails).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('refreshToken', res.refreshToken)
      localStorage.setItem('userType', res.userType)
      localStorage.setItem('email', res.email)
      localStorage.setItem('name', res.name)
      this.signupForm.reset({})
      console.log(res)
      this.sendMessage()
    })
  }


  sendMessage(): void {
    // send message to subscribers via observable subject
    this.commonService.sendUpdate('');
  }

}
