import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  
    <div class="container-fluid ">
      <div class="row">
      <div class="col-4">
      <app-admin-dashboard></app-admin-dashboard>
      </div>
      <div class="col-8">
      <app-adminform></app-adminform>
      </div>
      </div>
      

    
    
    </div>

  `,
  styles: [
  ]
})
export class AdminComponent {

}
