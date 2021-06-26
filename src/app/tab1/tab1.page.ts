import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  loginForm: FormGroup;
  loginForm1: FormGroup;
  msg: any;
    loading:any;
  otp1:boolean=false;
  gauth:false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // public storage: Storage,
    private authService: AuthService,
    public toastController: ToastController,public loadingController: LoadingController) { }


    ngOnInit() {


      this.presentLoadingWithOptions();
      
  
  
      this.loginForm = this.formBuilder.group({
        'email': [null, Validators.required],
        'password': [null, Validators.required],
  'email_otp': [null, Validators.required],
  
      });
  
  
    }




  checkGAUTH() {

    this.loading=true;
    this.authService
      .checkgoogleauth(this.loginForm.value)
      .subscribe((data) => {

 if(data['Error']==true){
  this.msg = data['message'];
alert(this.msg);

}
else{

if(data['emailconfirm']==true){
this.otp1=true;

  this.msg = data['message'];
alert(this.msg);

}
else{

        window.localStorage.removeItem("user_id");
        window.localStorage.setItem("token_type", data['token_type']);
        localStorage.setItem('access_token', data['access_token']);

        this.router.navigate(['/dashboard']);
        this.loading=false;
}

}

      });

  }



  emailotpverify() {
    this.loading=true;
    this.authService
      .emailotpverify(this.loginForm.value)
      .subscribe((data) => {

 if(data['Error']==true){


  this.msg = data['message'];
alert(this.msg);

}
else{

   
        window.localStorage.setItem("token_type", data['token_type']);
        localStorage.setItem('access_token', data['access_token']);
        localStorage.setItem('token', data['access_token']);

        this.router.navigate(['/dashboard']);
        this.loading=false;
}

      });
  }


  onFormSubmit(form: NgForm) {
    this.loading=true;
    this.authService
      .login(this.loginForm.value)
      .subscribe((data) => {
        this.msg = data['message'];

        if (data['Error'] == true) {
        }
        if (data['Error'] == false) {

          localStorage.setItem('token', data['access_token']);
            this.router.navigate(['/dashboard'])
            this.loading=false;
          
        }


      });
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

  sendto(page)
  {
  this.router.navigate([page]);
  }
 

}



