import { Token } from './token.interface';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';

import apiproperties from "./api.endpoints.default";
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {

    private authprops: {clientid: string, clientsecret: string, apicEndpoint: string,   getBalanceURI: string, getQuoteURI: string, oauthEndpoint: string, scopeIn: string, redirectUri:string };

    private grantcode: string;
    private tokens: Token;
    private access_token: string;
    private id_token: string;
    private scope : string;
    private expire_in: number;
  
    private username: string;
    private password: string;

    private islogged: boolean = false;

    private version: string = environment.VERSION;
   
    constructor(private http: Http) {
        this.authprops = apiproperties;
    }


    // auth : Get access token 
    auth(username: string, password: string){

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        headers.append('x-ibm-client-id', this.authprops.clientid);
       // let body = 'grant_type=password&client_id='8000892d-6c49-4e03-8340-ef31514a2789&client_secret=nI6uG5vD1nO6gL1cE2pI3cS3gL0rY4yV1qS7hE2oH1oJ0mK2hL&scope=demo&username=demo&password=demo';

       let body = 'grant_type=password&client_id=' + this.authprops.clientid +'&client_secret='+ this.authprops.clientsecret + '&scope=' + this.authprops.scopeIn + '&username=' + this.username +'&password='+this.password;

        return this.http.post(this.authprops.apicEndpoint + this.authprops.oauthEndpoint,body,{ headers: headers })
        .map(res => res.json());
    }

    // setAuth : store full token (include access_token, id_token, scope, expire, token type)
    setAuth(data: Token){
        this.tokens = data;
        this.access_token = data.access_token;
        this.id_token = data.id_token;
        this.scope = data.scope;
        this.expire_in = data.expires_in;
    }

    // getAuth : get full token (include access_token, id_token, scope, expire, token type)
    getAuth(){
        return this.tokens;
    }

    // getAccessToken : return access token
    getAccessToken(){
        return this.access_token;
    }

    // getIdToken : return id token
    getIdToken(){
        return this.id_token;
    }

    // getScope : return scope
    getScope(){
        return this.scope;
    }

    // getExpireIn : return expire_in value
    getExpireIn(){
        return this.expire_in;
    }

    // getClientID : return Client id
    getClientID(){
        return this.authprops.clientid;
    }

    setClientID(data){
        this.authprops.clientid = data;
    }

    // getClientSecret : return Client secret
    getClientSecret(){
        return this.authprops.clientsecret;
    }

    setClientSecret(data){
        this.authprops.clientsecret = data;
    }

    // getapicEndpoint : return apic endpoint
    getapicEndpoint(){
        return this.authprops.apicEndpoint;
    }

    setapicEndpoint(data){
        this.authprops.apicEndpoint = data;
    }

    // getBalanceURI : return getBalance API URI
    getgetBalanceURI(){
        return this.authprops.getBalanceURI;
    }

    setgetBalanceURI(data){
        this.authprops.getBalanceURI = data;
    }

    // getQuoteURI : return getQuote API URI
    getgetQuoteURI(){
        return this.authprops.getQuoteURI;
    }

    setgetQuoteURI(data){
        this.authprops.getQuoteURI = data;
    }

    // oauthEndpoint : return oauth Endpoint 
    getoauthEndpoint(){
        return this.authprops.oauthEndpoint;
    }
    
    setoauthEndpoint(data){
        this.authprops.oauthEndpoint = data;
    }

    // Define scope sending to OAuth request
    setscopeIn(data: string){
        this.authprops.scopeIn = data;
    }

    getscopeIn(){
        return this.authprops.scopeIn;
    }

    // getapicEndpoint : return apic endpoint
    getredirectUri(){
        return this.authprops.redirectUri;
    }

    // return version of this webapp
    getwebappversion(){
        return this.version;
    }


    // setUsername : store username
    setUsername(data: string){
        this.username = data;
    }

    // setUsername : store username
    getUsername(){
        return this.username;
    }
    
    // setPassword : store password
    setPassword(data: string){
        this.password = data;
    }

    // setPassword : store password
    getPassword(){
        return this.password;
    }

    setisLogged(data: boolean){
        this.islogged = data;
    }

    getisLogged(){
        return this.islogged;
    }
}