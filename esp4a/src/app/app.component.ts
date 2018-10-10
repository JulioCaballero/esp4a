import { Component, OnInit } from '@angular/core';
import { getParentRenderElement } from '@angular/core/src/view/util';
import { EspService } from '../services/esp.service';
import { AppModule } from './app.module';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from 'angularfire2/database'



@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css']
  
})


export class AppComponent implements OnInit{
  title = 'esp4a';
  
  constructor(public afDB: AngularFireDatabase){}
  ngOnInit():void{

  }
  
  Prender(){
    alert('Hola Mundo')  
  }

  ledOn(){
    return this.afDB.database.ref().child('LED_STATUS').set(1);
  }

  ledOff(){
    return this.afDB.database.ref().child('LED_STATUS').set(0);
  }
 
}



