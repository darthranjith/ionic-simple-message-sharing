import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { FirebaseProvider } from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private fbSrv: FirebaseProvider
  ) {
    this.loginForm = this.formBuilder.group({
      Email: new FormControl('iam@varanjith.com', Validators.required),
      Password: new FormControl('testranjith', Validators.required)
    });
  }

  doLogin(form: any) {
    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();
    this.fbSrv.login(form.value.Email, form.value.Password).then(
      res => {
        loader.dismiss();
        this.navCtrl.setRoot(HomePage);
      }, err => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Invalid Username/Password',
          buttons: ['Ok']
        });
        alert.present();
      }
    );
  }

}
