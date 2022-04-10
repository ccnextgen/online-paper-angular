import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostItemComponent } from './authenticated/post-item/post-item.component';
import { ItemListComponent } from './public/item-list/item-list.component';
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';

const routes: Routes = [
  {
    path: 'postAd',
    component: PostItemComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: ItemListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
