import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {
  isShown: boolean = false;

  constructor(public viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll') onWindowScroll(){
    const yCordinate = this.viewportScroller.getScrollPosition()[1]
    console.log(yCordinate)
    this.isShown = yCordinate > 150
  }
  ngOnInit(): void {
  }

  public goToTop(): void{
    this.viewportScroller.scrollToPosition([0,0])
  }

}
