import { Component } from "@angular/core";

@Component({
  selector: "app-navbar-static",
  template: `
    <div class="container-fluid bg-dark">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
      >
        <a
          href="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-light text-decoration-none"
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
          <li>
            <a href="/register" class="nav-link px-2 link-light">Contact</a>
          </li>
          <li>
            <a [routerLink]="['/about']" class="nav-link px-2 link-light"
              >About</a
            >
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button
            type="button"
            routerLink="/login"
            class="btn btn-outline-primary me-2"
          >
            Login
          </button>
          <button type="button" routerLink="/register" class="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  `,
  styles: [],
})
export class NavbarStaticComponent {}
