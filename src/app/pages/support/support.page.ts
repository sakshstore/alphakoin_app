import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

import { AuthService } from '../../services/auth.service';
import { LoadingController } from '@ionic/angular';

import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {


  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder, private authService: AuthService, private router: Router, public toastController: ToastController) { }
  editForm: FormGroup;
  addForm: FormGroup;
  support: any;

  count1: any;
  ngOnInit(): void {
    this.presentLoadingWithOptions();

    this.authService.ticket_list()
      .subscribe(data => {

        this.support = data;
        console.log(this.support);
      });

    this.addForm = this.formBuilder.group({
      id: [''],
      category: [''],
      title: [''],
      details: ['']
    });


  }

  onSubmit() {

    this.presentLoadingWithOptions();
    this.authService.addticket(this.addForm.value)
      .subscribe(data => {

        this.presentToast("Add ticket Successfully");
        this.router.navigate(['/ticket-list']);



      });


  }


  async presentToast(msg) {
    const toast = await this.toastController.create({
      position: 'top',
      color: 'dark',
      message: msg,
      duration: 200,


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
