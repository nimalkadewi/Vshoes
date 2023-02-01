import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-table',
  template: `
  <div class="container-fluid ">
      <div class="row">
      <div class="col-3">
      <app-admin-dashboard></app-admin-dashboard>
      </div>
      <div class="col-8">
      <app-ordertable></app-ordertable>
      </div>
      </div>
      

    
    
    </div>
  
  `,
  styles: [
  ]
})
export class AdminTableComponent {

}
