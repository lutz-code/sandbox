import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sandbox-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { 
    
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this._router.navigateByUrl(path)
  } 
}
