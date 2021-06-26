import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  total_balance: any;
  user_id: any;
  wallet_one: any;
  wallet_two: any;
  wallet_three: any;
  balance: any; bnexx_balance; btc_address;
slideOpts;
  bnexx_address; btc_balance;
  btc_rate;
  rate: any; coin_name; coin_rate;
  address: any;


  constructor( private authService: AuthService,private router: Router
    ,public loadingController: LoadingController) { }

  ngOnInit() {

    this.presentLoadingWithOptions();
    

    this.getcoin();
    
    this.authService.balance()
      .subscribe(data => {
        console.log("data",data);
        this.balance = data.balance;
        this.address = data.address;

       // this.coin_name = data.coin_name1;
        this.bnexx_balance = data.balance;
        this.bnexx_address = data.address;
        this.btc_address = data.btc_address;

        this.btc_balance = data.btc_balance;
        this.btc_rate = data.btc_rate;


      });


  
  }



  

  getcoin() {


    this.authService.getsettings()
      .subscribe(data => {
      console.log(data);
//alert(data.res.coin_name1);
        this.coin_name = data.res.coin_name1;
        this.coin_rate = data.res.exchange_rate;

      });
    }

  
    slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay:true
     };
  sendto(page){
    this.router.navigate([page]);

  }


  logout(){
    localStorage.clear();
  
  console.log('all keys cleared');
 this.router.navigate(['tabs/tab1']);

   

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
