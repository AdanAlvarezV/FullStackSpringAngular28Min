import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username === "UsernameTest" && this.password === "test"){
      this.invalidLogin = false;
      this.router.navigate(['welcome']);
    } else {
      this.invalidLogin = true;
    }
    
  }

}
