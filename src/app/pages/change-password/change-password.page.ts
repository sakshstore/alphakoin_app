import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

import { AuthService } from '../../services/auth.service';

import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  
  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder, private authService: AuthService, private router: Router,public toastController: ToastController) { }
 

  addForm: FormGroup;
  ngOnInit() {
    this.presentLoadingWithOptions();

    this.addForm = this.formBuilder.group({
      id: [],
      current_password: ['', Validators.required], 
       new_password: ['', Validators.required],
        confirm_password: ['', Validators.required]
        
     
     
    });

  }


  
  onSubmit() {
    this.presentLoadingWithOptions();
    this.authService.changepassword(this.addForm.value)
      .subscribe( data => {
        this.presentToast(data.message);
      });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
     position: 'top',
    color: 'dark',
      message: msg,
      duration: 500,
      
      
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
