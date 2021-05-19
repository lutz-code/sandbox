import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sandbox-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public solutions: Array<any> = [
    {
      svg: 'sp',
      title: 'Strategic Programs',
      description: 'Ongoing partnerships designed to identify and pursue strategic opportunities and empower growth.',
      button: 'Learn More',
      path: '#'
    },
    {
      svg: 'sp',
      title: 'Strategic Programs',
      description: 'Ongoing partnerships designed to identify and pursue strategic opportunities and empower growth.',
      button: 'Learn More',
      path: '#'
    },
    {
      svg: 'sp',
      title: 'Strategic Programs',
      description: 'Ongoing partnerships designed to identify and pursue strategic opportunities and empower growth.',
      button: 'Learn More',
      path: '#'
    },
  ]

  constructor(private _router: Router) { 
    
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this._router.navigateByUrl(path)
  } 
}
