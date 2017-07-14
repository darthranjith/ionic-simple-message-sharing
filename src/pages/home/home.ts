import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ComposePage } from '../compose/compose';
import { LoginPage } from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any[];
  subs: Subscription;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private fbSrv: FirebaseProvider) {
    this.subs = this.fbSrv.getAllMessages().subscribe(posts => {
      this.posts = posts;
    });
  }
  showComposing() {
    let modal = this.modalCtrl.create(ComposePage);
    modal.present();

  }

  logout() {
    this.fbSrv.logout().then(() => {
      this.subs.unsubscribe();
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
