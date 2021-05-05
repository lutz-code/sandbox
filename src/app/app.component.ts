import { Component } from '@angular/core';

@Component({
  selector: 'sandbox-app',
  template: `
    <sandbox-layout>
      <router-outlet></router-outlet>
    </sandbox-layout>    
  `,
})
export class AppComponent {
  
}
