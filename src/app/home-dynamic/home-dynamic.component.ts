import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dynamic',
  template: `
  <div class="Container-fluid m-0 p-0">
  <app-navbar-dynamic></app-navbar-dynamic>
    <app-home-dynamic></app-home-dynamic>
    </div>


  `,
  styles: [
  ]
})
export class HomeDynamicComponent {

}
