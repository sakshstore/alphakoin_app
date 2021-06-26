import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,NgForm, Validators} from "@angular/forms";

import { AuthService } from '../../services/auth.service';

import {Router} from "@angular/router";
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-two-factor-authentication',
  templateUrl: './two-factor-authentication.page.html',
  styleUrls: ['./two-factor-authentication.page.scss'],
})
export class TwoFactorAuthenticationPage implements OnInit {

img;
secret_code;
  addForm: FormGroup;
  enable:false;
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder,private authService: AuthService,private router: Router) { }

  ngOnInit() {

    this.presentLoadingWithOptions();

this.addForm = this.formBuilder.group({
      id: [],
      authcode: ['', Validators.required], 
       secret: ['']
        
        
     
     
    });
  }


profile_enable() {
  this.presentLoadingWithOptions();
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";


    else
      this.buttonName = "Show";
 this.authService.authenable()
      .subscribe( data => {
     // console.log(data);
      this.img=data['qr'];

     
       this.secret_code=data['secret'];

      });

  }



  authenable(page)

{


  this.presentLoadingWithOptions();
alert(page)
if(parseInt(page)==1){
	


 this.authService.authenable()
      .subscribe( data => {

      this.img=data['qr'];

     
       this.secret_code=data['secret'];

      });


      }

 
if(parseInt(page)==0){
             

	alert("Disable");
}
}

  onSubmit() {
    this.presentLoadingWithOptions();
  this.addForm.value.secret=this.secret_code;
    this.authService.authcode(this.addForm.value)
      .subscribe( data => {

      console.log(data);
      alert(data.message);
      
      });
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
