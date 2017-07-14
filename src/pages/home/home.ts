import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ComposePage } from '../compose/compose';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: any[];
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private fbSrv: FirebaseProvider) {
    this.fbSrv.getAllMessages().subscribe(posts => {
      this.posts = posts;
    })
  }
  showComposing() {
    let modal = this.modalCtrl.create(ComposePage);
    modal.present();
  }

  getMessages() {
    console.log(this.fbSrv.getAllMessages());

  }
}
