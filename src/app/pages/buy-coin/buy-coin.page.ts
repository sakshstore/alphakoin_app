
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-buy-coin',
  templateUrl: './buy-coin.page.html',
  styleUrls: ['./buy-coin.page.scss'],
})
export class BuyCoinPage implements OnInit {
  ReceivingAddress; amount; Address; rate; paidbtn; one;
  amountBTC; amountUSD; two;


  total_balance: any;
  user_id: any;
  wallet_one: any;
  wallet_two: any;
  wallet_three: any;
  balance: any; bnexx_balance; btc_address;

  bnexx_address; btc_balance;
  btc_rate;

  address: any;coin_name;

  coin_rate;

  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  buyForm: FormGroup;

  ngOnInit() {

    this.presentLoadingWithOptions();
    this.one = false;

    this.two = true;

    this.buyForm = this.formBuilder.group({
      ReceivingAddress: [''],
      amount: [''],
      type:['']




    });




    this.authService.balance()
      .subscribe(data => {
        console.log(data);
        this.balance = data.balance;
        

        this.address = data.address;
        this.bnexx_balance = data.balance;
        this.bnexx_address = data.address;
      //  alert(this.bnexx_address);
        this.btc_address = data.btc_address;

        this.btc_balance = data.btc_balance;
        this.btc_rate = data.btc_rate;


        this.buyForm.setValue({
          ReceivingAddress: data.bnexx_address,
          amount: ''

        });




      });

      this.authService.getsettings()
        .subscribe(data => {
  
     this.coin_name = data.coin_name;
          this.coin_rate = data.exchange_rate;
  
     });
  


  }
  onSubmit(form: NgForm) {

    this.presentLoadingWithOptions();
    this.ReceivingAddress = this.buyForm.controls.ReceivingAddress.value;

    this.amount = this.buyForm.controls.amount.value;


    this.authService.getBtcAddress(this.buyForm.value)
      .subscribe(data => {


        this.Address = data.Address;
        this.rate = data.rate;

        this.amountBTC = data.amountBTC;

        this.amountUSD = data.amountUSD;
        this.paidbtn = data.buy_from_balance;

        //amountBTC

        this.one = true;

        this.two = false;




      })
  }



  setthisaddress() {

    this.presentLoadingWithOptions();
    
    this.buyForm.controls['ReceivingAddress'].setValue(this.bnexx_address);

  }

  cancelorchange() {
    this.one = false;

    this.two = true;




  }
  invoicepaid() {
    this.presentLoadingWithOptions();
    this.authService.buycoinprocess(this.buyForm.value)
      .subscribe(data => {

        alert(data.Message);

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
