import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar2',
  template: `
                                    <div class="position-relative"
                                      style="width:50px; height: 50px; border-radius: 50%; border: 2px solid #e84118; padding: 2px">
                                      <img src="./assets/images/avatar2.png"
                                          class="img-fluid rounded-circle" alt="">
                                      <span
                                          class="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                          <span class="visually-hidden">New alerts</span>
                                      </span>
                                  </div>
    

  `,
  styles: [
  ]
})
export class Avatar2Component {

}
