import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import {GlobalConstants} from '../app.global';

@Component({
  selector: 'pb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public userData = [];
  username:string
  password:string
  isUserLoggedIn = new Subject<boolean>();

  constructor(private router: Router,public _dataService: DataService,public toastr:ToastrService) {
    this.isUserLoggedIn.next(false);
   }

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['/sign-up'])
  }


  signIn(){
    let record = {};
    record['username'] = this.username;
    record['password'] = this.password;

    if(!this.username || !this.password){
      alert('You need to enter all the details');
    }else{
      this._dataService.userLogin(record);
    }
  }

}
