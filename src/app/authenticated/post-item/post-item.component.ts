import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  isAuthenticatedUser = false
  constructor(
    private userService: UserService
  ) { }

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
}
