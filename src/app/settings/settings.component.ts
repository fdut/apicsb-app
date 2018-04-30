import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  redirectUri:string;

  clientid:string = "96d66e72-e0de-45b2-b8c9-5b49e7f90ee8";
  clientsecret:string = "kM2eV0oO2qM7sI0oT5rJ2tR6eC6yT4yX6bL4eV7eB1qU7pE5yX";
  apicendpoint:string = "https://api.eu-de.apiconnect.ibmcloud.com/fdutorg-dev/sb";
  webappversion:string = "0.0.0";

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.clientid=this.authService.getClientID();
    this.clientsecret=this.authService.getClientSecret();
    this.webappversion=this.authService.getwebappversion();
  }

}
