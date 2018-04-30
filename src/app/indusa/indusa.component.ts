import { cdbStatement } from './../statement.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Statement } from './../statement.model'



@Component({
  selector: 'app-indusa',
  templateUrl: './indusa.component.html',
  styleUrls: ['./indusa.component.css']
})

export class IndusaComponent implements OnInit {

  statementValue : string = "0";
  name : string = "";
  statrespvalue : string="";

  statements: any;

  error: string;
  step: number = 0;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.onLoadStatement();
  }

  onCheck(){
    //this.secureLabel = (this.secure) ? "Secure":"Unsecure"; 
  }

  onLoadStatement(){
      this.apiService.getStatements()
      .subscribe((data) => {this.statements = data.rows;
      },(err) => this.error = 'Unable to connect.'
       ,() => {console.log("GetStatements Complete :" + JSON.stringify(this.statements))});            
  }


  // Post statemen step
  postStatement(){

      this.step=1;
      this.error="";
      this.statrespvalue="";

      const statement = new Statement(this.name,this.statementValue,new Date);

      this.apiService.postStatement(statement)
        .subscribe(data => {
          this.statrespvalue=data;
          this.onLoadStatement();
          this.statementValue="0";
        }  , error => {
          console.log(error);
          this.error=JSON.stringify(error._body);
        });
  }

  deleteStatement(stat: cdbStatement){
        this.error="";       
        this.apiService.deleteStatement(stat.id,stat.doc._rev)
                  .subscribe((data) => {
                    console.log(data);
                    this.onLoadStatement();
                  }
                  ,(err) => this.error = 'Unable to delete.'
                  ,() => {console.log("DeleteStatement Complete")});
                          
    }      
      

}
