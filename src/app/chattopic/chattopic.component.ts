import { Component } from '@angular/core';

@Component({
  selector: 'app-chattopic',
  template: `
                          <div class="card">
                            <div class="card-body">
    
                                <ul class="list-unstyled mb-0">
                                    <li class="p-2 border-bottom" style="background-color: #eee;">
                                        <a href="#!" class="d-flex justify-content-between">
                                            <div class="d-flex flex-row">
                                                <a href="#"><img
                                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                                        alt="avatar"
                                                        class="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                        width="60"></a>
                                                <div class="pt-1">
                                                    <a href="#">
                                                        <p class="fw-bold mb-0">John Doe</p>
                                                        <p class="small text-muted">Hello, Are you there?</p></a>
                                                </div>
                                            </div>
                                            <div class="pt-1">
                                                <p class="small text-muted mb-1">Just now</p>
                                                <span class="badge bg-danger float-end">1</span>
                                            </div>
                                        </a>

                                </ul>
    
                            </div>
                        </div>

  `,
  styles: [
  ]
})
export class ChattopicComponent {

}
