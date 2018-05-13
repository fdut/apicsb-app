import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-banka',
  templateUrl: './banka.component.html',
  styleUrls: ['./banka.component.css']
})
export class BankaComponent implements OnInit {

  accountId : string = "0";
  accountvalue = "";
  quotevalue: string = "IBM";
  quoteresult = "";
  error: string;
  step: number = 0;

  
  
  constructor(private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
    this.error="";
  }


    // Get Balance Token step
    getBalance(){
      this.step=1;
      this.error="";
      this.accountvalue = "";
      console.log("accountid: " + this.accountId);
      this.apiService.getBalance(this.accountId)
      .subscribe(data => {
        this.accountvalue=data;
      }  , error => {
        this.error=JSON.stringify(error);
      });
    }

    // Get Quote Token step
    getQuote(){
      this.step=2;
      this.error="";
      this.quoteresult="";
      this.apiService.getQuote(this.quotevalue)
          .subscribe(data => {
            this.quoteresult=data;
      }  , error => {
        this.error=JSON.stringify(error);
        });
      }
  

}
