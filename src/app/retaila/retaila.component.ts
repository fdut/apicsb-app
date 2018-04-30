import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retaila',
  templateUrl: './retaila.component.html',
  styleUrls: ['./retaila.component.css']
})
export class RetailaComponent implements OnInit {

  constructor() { }

  showitem = false;

  ngOnInit() {
  }

  inView() {
    this.showitem=true;
  }

  goBack() {
    this.showitem=false;
  }
}
