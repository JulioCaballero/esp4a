import { Component, OnInit } from '@angular/core';
import { getParentRenderElement } from '@angular/core/src/view/util';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'esp4a';

  ngOnInit():void{

  }
  
  Prender(){
    alert('Hola Mundo')  
  }
}


