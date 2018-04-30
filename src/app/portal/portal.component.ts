import { Component, OnInit } from '@angular/core';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})

export class PortalComponent implements OnInit {

  constructor(private portalService: PortalService) { }

  error: string;

  ngOnInit() {
  }

  servers = [
    {"id":"5a1c7fa60cf2a654eef65f72",
    "info":{"x-ibm-name":"apiFlow",
            "title":"...",
            "version":"..."},
    "protocol":"REST",
    "url":"https://eu-de.apiconnect.ibmcloud.com/v1/portal/apis/5a1c7fa60cf2a654eef65f72"}
  ];


  onGet() {
    this.portalService.getAPIs()
      .subscribe(data => {
        console.log(data);
        this.servers = data
       
      }  , error => {
        this.error=JSON.stringify(error);
      });
  }






  onGetProduct() {
    this.portalService.getProducts()
      .subscribe(data => {
      console.log(data);
      this.servers = data
     
    }  , error => {
      this.error=JSON.stringify(error);
    });
  }

}
