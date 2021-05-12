import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sandbox-layout',
  styleUrls: ['./layout.component.scss'],
  template: `
    <div class="layout">
      <sandbox-header></sandbox-header>
        <ng-content select="router-outlet"></ng-content>
      <sandbox-footer></sandbox-footer>
    </div>
  `,
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
