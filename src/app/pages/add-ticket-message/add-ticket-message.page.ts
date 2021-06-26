import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-ticket-message',
  templateUrl: './add-ticket-message.page.html',
  styleUrls: ['./add-ticket-message.page.scss'],
})
export class AddTicketMessagePage implements OnInit {

  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder, private authService: AuthService, private router: Router,public toastController: ToastController) { }
addForm: FormGroup;
 messages;
 title;
 category;
details;
 ticket_id;
  id1: any;
  private sub: any;

  ngOnInit() {
    this.presentLoadingWithOptions();
 let t= window.localStorage.getItem("ticket_id");
this.id1=t;
this.authService.ticket_by_id(+this.id1)
      .subscribe( data => {
      this.category=data['category'];
      this.details=data['details'];
       this.title=data['title'];
      console.log(data);
       });

  
  this.addForm = this.formBuilder.group({
      
      ticket_id: [this.id1, Validators.required],
      message: ['', Validators.required]  
       
        
     });


  }

  onSubmit() {

    this.presentLoadingWithOptions();
    this.authService.ticket_addmessage(this.addForm.value)
      .subscribe( data => {
	 this.presentToast("add successfully");
	 this.router.navigate(['/ticket-message-list']);
		 


      });
  }
 
 async presentToast(msg) {
    const toast = await this.toastController.create({
     position: 'top',
    color: 'dark',
      message: msg,
      duration: 200,
      
      
    });
    toast.present();
  }
  sendto(page){
    this.router.navigate([page]);

  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
       spinner: "bubbles",
       duration: 1000,
       message: 'Please wait...',
       translucent: true,
       cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
 }
}
