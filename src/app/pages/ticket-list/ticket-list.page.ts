import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.page.html',
  styleUrls: ['./ticket-list.page.scss'],
})
export class TicketListPage implements OnInit {
support:any;
count1:any;
  constructor(public loadingController: LoadingController,private authService: AuthService, private router: Router,public toastController: ToastController) { }

  ngOnInit() {
    this.presentLoadingWithOptions();
   this.authService.ticket_list()
      .subscribe( data => {
      
        this.support = data;
        console.log(this.support);
         this.count1=this.support.length;
});
  }
sendtoid(id){
 window.localStorage.removeItem("ticket_id");
          window.localStorage.setItem("ticket_id",id);

	this.router.navigate(['/ticket-message-list']);
}
sendto1(){
 

	this.router.navigate(['/support']);
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
