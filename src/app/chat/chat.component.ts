import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
        <div class="container pb-5" style="height: 100vh;" >
      
      <div class="card mx-auto" style="max-width:70rem">
          <div class="card-header bg-transparent">
              <div class="navbar navbar-expand p-0">
                  <ul class="navbar-nav me-auto align-items-center">
                      <li class="nav-item">
                          <a href="#!" class="nav-link">
                              <app-avatar></app-avatar>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a href="#!" class="nav-link">Nelh</a>
                      </li>
                  </ul>
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <a href="#!" class="nav-link">
                              <i class="fas fa-phone-alt"></i>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a href="#!" class="nav-link">
                              <i class="fas fa-video"></i>
                          </a>
                      </li>
                      <li class="nav-item">
                          <a href="#!" class="nav-link">
                              <i class="fas fa-times"></i>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="card-body p-4" style="height: 500px; overflow: auto;">



              <div class="d-flex align-items-baseline text-end justify-content-end mb-4">
                  <div class="pe-2">
                      <div>
                          <div class="card card-text d-inline-block p-2 px-3 m-1">Sure</div>
                      </div>
                      <div>
                          <div class="card card-text d-inline-block p-2 px-3 m-1">Let me know when you're available?
                          </div>
                      </div>
                      <div>
                          <div class="small">01:13PM</div>
                      </div>
                  </div>
                  <app-avatar2></app-avatar2>
              </div>

             
                  

          </div>
          <div class="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
              <div class="input-group">
                  
                  <input type="text" class="form-control border-0" placeholder="Write a message...">
                  <div class="input-group-text bg-transparent border-0">
                      <button class="btn btn-light text-secondary">
                        <i class="bi bi-send-fill"></i>
                      </button>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>

  `,
  styles: [
  ]
})
export class ChatComponent {

}
