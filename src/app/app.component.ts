import { Token } from './token.interface';
import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from '@angular/forms';


import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  modalRef: BsModalRef;
  islogged = false;
  token: Token = { access_token: '', token_type: '', expires_in: 0 , id_token: '', refresh_token: '', scope: ''};

  constructor(private modalService: BsModalService, private authService: AuthService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }


  onSubmit(form: NgForm){
    console.log("Log - onSubmit: " + JSON.stringify(form.value));
    this.modalRef.hide();
    this.islogged = true;
    this.authService.setUsername(form.value.user);
    this.authService.setPassword(form.value.pass);
    console.log("user:" + this.authService.getUsername());

    this.authService.auth(form.value.user, form.value.pass)
    .subscribe(data => {
      console.log(data);
      this.authService.setAuth(data);
    }  , error => {
      console.log(JSON.stringify(error));// Error getting the data
      this.logOut();
    });

  }

  logOut(){
    this.islogged = false;
    this.authService.setUsername("");
    this.authService.setPassword("");
    this.authService.setAuth(this.token);
  }

}
