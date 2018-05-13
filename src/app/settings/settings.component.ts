import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

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
  
  getBalanceURI:string = "/bank/getbalance";
  getQuoteURI:string = "/bank/getQuote";
  oauthEndpoint:string = "/oauth";
  scopeIn:string;
  
  webappversion:string = "0.0.0";

  grantCode: string;
  accessToken:string;
  idToken:string;
  scope:string;
  expire_in:number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.clientid=this.authService.getClientID();
    this.clientsecret=this.authService.getClientSecret();
    this.apicendpoint=this.authService.getapicEndpoint();
    this.getBalanceURI=this.authService.getgetBalanceURI();
    this.getQuoteURI=this.authService.getgetQuoteURI();
    this.oauthEndpoint=this.authService.getoauthEndpoint();
    this.scopeIn=this.authService.getscopeIn();
    this.webappversion=this.authService.getwebappversion();

//Dynamics properties

    this.accessToken=this.authService.getAccessToken();
    this.idToken=this.authService.getIdToken();
    this.scope=this.authService.getScope();
    this.expire_in=this.authService.getExpireIn();

  }

  onUpdateProps(form: NgForm){
    console.log("Save - onSubmit: " + JSON.stringify(form.value));
    this.authService.setClientID(form.value.clientid);
    this.authService.setClientSecret(form.value.clientsecret);
    this.authService.setapicEndpoint(form.value.apicendpoint);
    this.authService.setoauthEndpoint(form.value.oauthEndpoint);
    this.authService.setgetBalanceURI(form.value.getBalanceURI);
    this.authService.setgetQuoteURI(form.value.getQuoteURI);
    this.authService.setscopeIn(form.value.scopeIn);
  }

}
