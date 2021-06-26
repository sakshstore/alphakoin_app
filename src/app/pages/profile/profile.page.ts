import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";


import { AuthService } from '../../services/auth.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService, private router: Router,public loadingController: LoadingController) { }
  editForm: FormGroup;

  ngOnInit() {
    this.presentLoadingWithOptions();

    this.editForm = this.formBuilder.group({
      id: [''],
      first_name: [''], last_name: [''], email: [''],
      mobile: ['']





    });

    this.authService.getuserById()
      .subscribe(data => {

        this.editForm.setValue({
          id: data.id,
          first_name: data.first_name, last_name: data.last_name, email: data.email,
          mobile: data.mobile





        });

      });
  }
  onSubmit(form: NgForm) {
    this.presentLoadingWithOptions();
    this.authService.updateProfile(form)
      .pipe(first())
      .subscribe(
        data => {
          console.log("data", data);
          if (data.status === 200) {
            alert(data.message);

          } else {
            alert(data.message);

          }
        },
        error => {
          alert(error);
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
