import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from '../../models/post.model';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class FirebaseProvider {

  constructor(
    private http: Http,
    private db: AngularFireDatabase,
    private fireauth: AngularFireAuth
  ) {

  }

  login(email: string, password: string) {
    return this.fireauth.auth.signInWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.fireauth.auth.currentUser.displayName;
  }

  postMessage(form: any) {
    return this.db.list('posts').push(form);
  }

  getAllMessages() {
    return this.db.list('posts');
  }

}
