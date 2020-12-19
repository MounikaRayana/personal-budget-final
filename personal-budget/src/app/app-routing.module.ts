import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutComponent } from './about/about.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent} from './signup/signup.component';
import {AddbudgetComponent} from './addbudget/addbudget.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    pathMatch : 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,

  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'homepage',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    pathMatch : 'full'
  },
  {
    path: 'budget-add',
    component: AddbudgetComponent
  },
  {
    path:'logout',
    component: LoginPageComponent
  },

  {
    path: '**',
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
