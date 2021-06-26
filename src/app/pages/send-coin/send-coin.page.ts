import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { User } from '../../model/user';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-send-coin',
  templateUrl: './send-coin.page.html',
  styleUrls: ['./send-coin.page.scss'],
})
export class SendCoinPage implements OnInit {

  constructor(public loadingController: LoadingController,public toastController: ToastController, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  addForm: FormGroup;
  msg: any;
  users: User[];
  member_id: any;
  name: any;
  balance: any;
  paymentid: any;
  USD: any;
  btc: any;
  toAddress;
trid;
tid:boolean=false;
  amount_coin; description;
  rate: any;
  rate1: any;

  one; amount_usd;
  two;

  ngOnInit() {
    this.presentLoadingWithOptions();
    this.addForm = this.formBuilder.group({

      toAddress: ['', Validators.required],
      amount: ['', Validators.required],

      amount_usd: ['', Validators.required],
      description: ['', Validators.required],
      network_fee: ['', Validators.required],
    });



    this.authService.rate(1)
      .subscribe(data => {
        console.log(data);
        this.rate = data.rate;
      });


    this.two = true;

    this.one = false;


  

  }

  onSubmit(form: NgForm) {

    this.presentLoadingWithOptions();
    this.authService.send_payment(form)
      .subscribe(data => {
        this.msg = data['message'];
        this.trid= data['result']['id'];
        alert(this.msg);
            alert(this.trid);
        this.tid=true;
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: this.msg,
          duration: 10000,


        });

      });

 


  }

  confirm() {
    this.presentLoadingWithOptions();

    this.toAddress = this.addForm.controls.toAddress.value;

    this.amount = this.addForm.controls.amount.value;


    this.amount_usd = this.addForm.controls.amount_usd.value;



    this.description = this.addForm.controls.description.value;


    this.two = false;

    this.one = true;

  }

  onKey(event: any) { // without type info
    // this.amount = event.target.value;
    this.USD = this.rate * event.target.value;
    this.addForm.controls['amount_usd'].setValue(this.USD);
  }

  onKey1(event: any) { // without type info



    this.addForm.controls['amount'].setValue(event.target.value / this.rate);


  }

  amount;

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
