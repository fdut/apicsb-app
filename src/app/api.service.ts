import { AuthService } from './auth.service';
import { Token } from './token.interface';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Statement } from './statement.model'

import 'rxjs/Rx';


@Injectable()
export class ApiService {
 
    constructor(private http: Http, private authService: AuthService) {}
    
    getBalance(data: string){
            
        var headers = new Headers();
        headers.append('Accept', 'application/json' );
        headers.append('x-ibm-client-id', this.authService.getClientID());
        headers.append('x-ibm-client-secret', this.authService.getClientSecret());
        if (this.authService.getisLogged()) {
            headers.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
        }
    
        return this.http.get(this.authService.getapicEndpoint() + this.authService.getgetBalanceURI()  + '/' + data, { headers: headers })
                .map(res => res.json());
    }

    getQuote(data: string){
            
        var headers = new Headers();
        headers.append('Accept', 'application/json' );
        headers.append('x-ibm-client-id', this.authService.getClientID());
        headers.append('x-ibm-client-secret', this.authService.getClientSecret());
        if (this.authService.getisLogged()) {
            headers.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
        }

    
        return this.http.get(this.authService.getapicEndpoint() + this.authService.getgetQuoteURI() + '?symbol=' + data, { headers: headers })
                .map(res => res.json());
    }


    getStatements(){
            
        var headers = new Headers();
        headers.append('accept', 'application/json' );
        headers.append('x-ibm-client-id', this.authService.getClientID());
        headers.append('x-ibm-client-secret', this.authService.getClientSecret());

        return this.http.get(this.authService.getapicEndpoint() + '/v1/statement', { headers: headers })
            .map(res => res.json());
    }

    postStatement(data: Statement){
            
        var headers = new Headers();
        if (this.authService.getisLogged()) {
            headers.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
        }
        headers.append('accept', 'application/json' );
        headers.append('x-ibm-client-id', this.authService.getClientID());
        headers.append('x-ibm-client-secret', this.authService.getClientSecret());
        headers.append('Content-Type', 'application/json' );

        console.log(headers);

        return this.http.post(this.authService.getapicEndpoint() + '/v1/statement', data, { headers: headers })
            .map(res => res.json());
    }


    deleteStatement(documentid: string, documentrev: string ){

        var headers = new Headers();
        headers.append('x-ibm-client-id', this.authService.getClientID());
        headers.append('x-ibm-client-secret', this.authService.getClientSecret());
        headers.append('Accept', 'application/json' );
        headers.append('Content-Type', 'application/json' );

        return this.http.delete(this.authService.getapicEndpoint() + '/v1/statement'+'?id='+ documentid + "&rev=" + documentrev, { headers: headers })
            .map(res => res.json());
    }

}