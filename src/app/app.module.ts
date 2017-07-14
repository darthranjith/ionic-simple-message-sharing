import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ComposePage } from '../pages/compose/compose';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDDLWcA3aZe20IqoekSa3K0syfQs78QFQM',
    authDomain: 'quureo-test.firebaseapp.com',
    databaseURL: 'https://quureo-test.firebaseio.com',
    projectId: 'quureo-test',
    storageBucket: 'quureo-test.appspot.com',
    messagingSenderId: '688604833535'
  }
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ComposePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ComposePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider
  ]
})
export class AppModule { }
