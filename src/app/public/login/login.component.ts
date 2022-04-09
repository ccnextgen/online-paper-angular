import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe((res) => {
      this.loginForm.reset({})
      console.log(res)
    })
  }

  

}
