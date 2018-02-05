import {Component, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.html',
  styleUrls: ['./image.css']
})
export class ImageComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef , private  renderer: Renderer2){}

  deployMethods = [{'key': 'WAR_DEPLOY' , 'value': 'WAR包发布'},
    {'key': 'SVN_DEPLOY' , 'value': 'SVN源码发布'}];

  deployTypes = [{'key': 'SINGLE_DEPLOY' , 'value': '单点发布'},
    {'key': 'CLUSTER_DEPLOY' , 'value': '集群发布'}];


  deployMethodStr  = '';
  deployTypeStr = '';

 ngAfterViewInit(){

}

