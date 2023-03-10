import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcoderAuthenticationService {

  constructor() { }

  authenticate(username, password){
    //console.log("BEFORE => " + this.isUserLoggedIn());
    if(username === "UsernameTest" && password === "test"){
      sessionStorage.setItem('authenticatedUser', username);
      //console.log("AFTER => " + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
