import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PortalService {
  
  constructor(private http: Http) {}

  getAPIs() {
  var headers = new Headers();
  headers.append('X-IBM-APIManagement-Context', 'fdutorg-dev.sb' );

  return this.http.get("https://eu-de.apiconnect.ibmcloud.com/v1/portal/apis", { headers: headers })
          .map(res => res.json());
}

getProducts() {
    
  var headers = new Headers();
  headers.append('X-IBM-APIManagement-Context', 'fdutorg-dev.sb' );

  return this.http.get("https://eu-de.apiconnect.ibmcloud.com/v1/portal/products", { headers: headers })
  .map(res => res.json());
   
}


  
}
