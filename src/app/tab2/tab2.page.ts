import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  registerForm: FormGroup;
member_id:any;
  name:any;
  balance:any;
  msg:any;
  loading:any;

login_otp:boolean=false;
  

  constructor(
  
  
  
  
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public toastController: ToastController,
    public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {

    this.presentLoadingWithOptions();
      
    this.registerForm = this.formBuilder.group({
    
      'email' : [null, Validators.required],
       'name' : [null, Validators.required],
      'password' : [null, Validators.required],
      'otp':[null]
    });
  }

  onFormSubmit(form: NgForm) {
    this.loading=true;
    this.authService.register_otp(form)
      .subscribe(_ => {
        this.presentAlert('Register Successfully', 'Email Sent. Check your inbox');
      
      }, (err) => {
        console.log(err);
      });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.login_otp=true;
           // this.router.navigate(['tabs/tab1']);
            this.loading=false;
          }
        }]
    });

    await alert.present();
  }


  sendto(page)
  {
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

 emailotpverify() {
    this.loading=true;
    this.authService
      .register(this.registerForm.value)
      .subscribe((data) => {

      console.log(data);

 if(data['Error']==true){


  this.msg = data['message'];
alert(this.msg);

}
else{

    this.presentAlert('Verified Successfully', 'Please login with your new username and password');
      
    
        window.localStorage.setItem("token_type", data['token_type']);
        localStorage.setItem('access_token', data['access_token']);
        localStorage.setItem('token', data['access_token']);

       this.router.navigate(['tabs/tab1']);
        this.loading=false;
}

      });
  }
}