import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Transactions } from '../../model/transactions';
import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  count1;
  transactions :  Transactions[];;
  constructor(public loadingController: LoadingController,private authService: AuthService, private router: Router) { }

  ngOnInit() {
     
    this.presentLoadingWithOptions();
    
	  

       this.authService.transactions()
      .subscribe(data => {

        this.transactions = data;
        console.log(this.transactions);
        this.count1=this.transactions.length;
      


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
