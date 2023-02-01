import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-chat-field',
  template: `
    <div class="container-fluid">
    <div class="row">
    <app-admin-dashboard class="col-sm-2 " ></app-admin-dashboard>
    <app-chattopic class="col-sm-4"></app-chattopic>
    <app-chat class="col-sm-6 "></app-chat></div>
    </div>
  `,
  styles: [
  ]
})
export class AdminChatFieldComponent {

}
