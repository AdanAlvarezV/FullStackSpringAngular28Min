import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcoderAuthenticationService } from '../service/hardcoder-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

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
    private hardcoderAuthenticationService:HardcoderAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

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

  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      });    
  }

  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      });    
  }

}
