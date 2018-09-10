import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-healtha',
  templateUrl: './healtha.component.html',
  styleUrls: ['./healtha.component.css']
})
export class HealthaComponent implements OnInit {

  healthlist: any;
  numSecu: string;
  health: string;
  healthrespvalue: string;

  error: string;
  step: number = 0;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //this.onLoadHealthList();
  }

  onCheck(){
    //this.secureLabel = (this.secure) ? "Secure":"Unsecure"; 
  }

  onLoadHealthList(){

      this.apiService.getHealthList(this.numSecu)
      .subscribe((data) => {console.log("data = " + JSON.stringify(data)); this.healthlist = data.rows;
      this.healthrespvalue = data;
      },(err) => this.error = 'Unable to connect.'
       ,() => {console.log("GetHealthList Complete :" + JSON.stringify(this.healthlist))});            
  }


 

}
