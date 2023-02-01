import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
  
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-dark vh-100" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">DASHBOARD</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a routerLink="/admin" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          HOME
        </a>
      </li>
      <li>
        <a routerLink="/itemtable-feild" class="nav-link link-light">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Manage Items
        </a>
      </li>

      <li>
        <a routerLink="/admintable" class="nav-link link-light">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a routerLink="/adminchat" class="nav-link link-light">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Messages
        </a>
      </li>
      <li>
        <a routerLink="/admin" class="nav-link link-light">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
         Add Items
        </a>
      </li>

    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" routerLink="/profile">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a  class="dropdown-item text-danger">Sign out</a></li>
      </ul>
    </div>
  </div>



  `,
  styles: [
  ]
})
export class AdminDashboardComponent {

}
