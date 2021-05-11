import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sandbox-header',
  template: `<button (click)="homeClick()">Home</button>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  homeClick() {
    console.log('you clicked home')
  }
  picsClick() {
    console.log('you clicked pics')
  }
  placesClick() {
    console.log('you clicked places')
  }
  aboutClick() {
    console.log('you clicked about')
  }
}

