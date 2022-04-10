import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticatedUser = false
  private subscriptionName: Subscription
  constructor(
    private userService: UserService,
    private commonService: CommonService,
  ) {
    this.subscriptionName = this.commonService.getUpdate().subscribe
      (message => {
        this.ngOnInit()
      });
  }

  ngOnInit(): void {
    this.isAuthenticated()
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if (token) {
      return this.userService.isAuthenticatedUse(token).subscribe((res: any) => {
        console.log(res)
        this.isAuthenticatedUser = res
      })
    } else {
      return this.isAuthenticatedUser = false
    }
  }

  logout() {

    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('userType')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    this.ngOnInit()
  }

  // refresh(){
  //   this.ngOnInit()
  // }




}
