import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //@Output() refresh: EventEmitter<any> = new EventEmitter();
  isLogged = false
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService: UserService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('refreshToken', res.refreshToken)
      localStorage.setItem('userType', res.userType)
      localStorage.setItem('email', res.email)
      localStorage.setItem('name', res.name)
      this.loginForm.reset({})
      this.isLogged = true
      console.log(res)
      this.sendMessage()
      this.router.navigate([''])
    })
  }


  sendMessage(): void {
    // send message to subscribers via observable subject
    this.commonService.sendUpdate('');
  }



}
