import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcoderAuthenticationService } from '../service/hardcoder-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "UsernameTest";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router:Router,
    private hardcoderAuthenticationService:HardcoderAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcoderAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    
  }

}
