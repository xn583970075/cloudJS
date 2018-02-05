import {Component, ViewChild, QueryList, ElementRef, AfterViewInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef: ElementRef , private  renderer: Renderer2){}
  title = 'app';
 // @ViewChild('topElement')
 // topElement: ElementRef;
 // @ViewChild('leftElement')
 // leftElement: ElementRef;
 //  @ViewChild('rightElement')
 //  rightElement: ElementRef;
 ngAfterViewInit(){
   // this.renderer.setStyle(this.topElement.nativeElement, 'height', '48px');
   // this.renderer.setStyle(this.leftElement.nativeElement, 'width' , '132px');
   // this.renderer.setStyle(this.leftElement.nativeElement, 'height' , 'calc(100% - 48px)');
   // this.renderer.setStyle(this.rightElement.nativeElement, 'top' , '48px');
   // this.renderer.setStyle(this.rightElement.nativeElement, 'left' , '132px');
   // this.renderer.setStyle(this.rightElement.nativeElement, 'position' , 'fixed');
   // this.renderer.setStyle(this.rightElement.nativeElement, 'bottom' , '0');
   // this.renderer.setStyle(this.rightElement.nativeElement, 'right' , '0');
  }

  layout_top (top_height : string , left_width : string) {
  }

  layou_left (left_height : string , left_width : string) {

  }
}

