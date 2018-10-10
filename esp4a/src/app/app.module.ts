import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ReactiveFormsModule } from '@angular/forms';



//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Material
import {MaterialModule} from './material'

import { EspService } from '../services/esp.service';
import { LoginComponent } from './login/login.component';

const config = {
  apiKey: "AIzaSyDU8wlb7HyqKd6rN4oHL_LcRnqkEs1DtbY",
  authDomain: "esp4a-57345.firebaseapp.com",
  databaseURL: "https://esp4a-57345.firebaseio.com",
  projectId: "esp4a-57345",
  storageBucket: "esp4a-57345.appspot.com",
  messagingSenderId: "251901373180"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [EspService],
  bootstrap: [AppComponent]
})


export class AppModule { }


