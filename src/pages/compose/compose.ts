import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'page-compose',
  templateUrl: 'compose.html',
})
export class ComposePage {
  composeForm: FormGroup;
  username: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private fbSrv: FirebaseProvider,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController) {
    this.composeForm = this.formBuilder.group({
      Message: new FormControl('', [Validators.required, Validators.maxLength(120)]),
      User: new FormControl(this.fbSrv.getUser())
    });
  }

  closeComposing() {
    this.viewCtrl.dismiss();
  }

  doCompose(form: any) {
    let loader = this.loadingCtrl.create({
      content: "Posting Message..."
    });
    loader.present();
    this.fbSrv.postMessage(form.value).then(() => {
      loader.dismiss();
      this.closeComposing();
    }
    );
  }

}
