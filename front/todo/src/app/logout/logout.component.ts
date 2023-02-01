import { Component, OnInit } from '@angular/core';
import { HardcoderAuthenticationService } from '../service/hardcoder-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService:HardcoderAuthenticationService) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}
