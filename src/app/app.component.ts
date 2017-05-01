import { Component, OnInit } from '@angular/core';
import {NgFor, NgClass} from '@angular/common';
import { Element } from './objects/Element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!!!';
  elements: Element[] = [];
  elementsyoung: Element[] = [];
  elementsindex: number = 0;
  elementsyoungindex: number = 0;

  constructor(){
   
  }

  ngOnInit(){
    
  }

}
