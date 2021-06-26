import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ticket-message-list',
  templateUrl: './ticket-message-list.page.html',
  styleUrls: ['./ticket-message-list.page.scss'],
})
export class TicketMessageListPage implements OnInit {
  id1;
  messages: any;
  count1: any;
  constructor(public loadingController: LoadingController,private authService: AuthService, private router: Router,
     public toastController: ToastController) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
    let t = window.localStorage.getItem("ticket_id");
    this.id1 = t;
    this.authService.getticket_message(+this.id1)
      .subscribe(data => {
        this.messages = data;
        console.log(data);
        this.count1 = this.messages.length;
      });



  }

  sendto(page){
    this.router.navigate([page]);

  }
  sendto1() {


    this.router.navigate(['/add-ticket-message']);
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
