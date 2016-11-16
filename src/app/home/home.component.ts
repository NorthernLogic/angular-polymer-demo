import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('map') map: ElementRef;
  @ViewChild('directions') directions: ElementRef;
  constructor() {
  }

  ngAfterViewInit() {
    (this.map.nativeElement as HTMLElement).addEventListener('api-load', () => {
      this.directions.nativeElement.map = this.map.nativeElement.map;
    });
  }

}
