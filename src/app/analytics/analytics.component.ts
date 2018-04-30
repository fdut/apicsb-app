import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {


  //analyticsLink = "https://eu.apiconnect.ibmcloud.com/v1/kibana/share-kibana#/dashboard/tpp-default?embed=true&_g=(catalogId%3A'5a7d838e0cf282db979a3803'%2CcatalogName%3ASandbox%2CorgId%3A'5a7d838d0cf282db979a37f7'%2CrefreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cmode%3Aquick%2Cto%3Anow%2Fw))";
  analyticsLink : string = "https://eu-de.apiconnect.ibmcloud.com/v1/kibana/share-kibana#/dashboard/api-sb-default?_g=(catalogId%3A'59aea12d0cf259ba039a4179'%2CcatalogName%3ASandbox%2CorgId%3A'59aea12c0cf259ba039a416d'%2CrefreshInterval%3A(display%3AOff%2Cpause%3A!f%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cmode%3Aquick%2Cto%3Anow%2Fw))";
  url: SafeResourceUrl;
 
  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  
  onUpdateLink(){
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.analyticsLink)
  }
}
