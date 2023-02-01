import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Subject} from "rxjs";
import {User} from "../user";

@Component({
  selector: "app-login-form",
  template: `
    <section class="vh-100" style="background-color: #1F4690;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    class="img-fluid"
                    style="border-radius: 1rem 0 0 1rem;"
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form [formGroup]="form" (ngSubmit)="submitForm()">
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i
                          class="fas fa-cubes fa-2x me-3"
                          style="color: #ff6219;"
                        ></i>
                        <span class="h1 fw-bold mb-0">Logo</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style="letter-spacing: 1px;"
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          formControlName="email"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Email address</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          formControlName="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example27"
                          >Password</label
                        >
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <a class="small text-muted" href="#!">Forgot password?</a>
                      <p class="mb-5 pb-lg-2" style="color: #393f81;">
                        Don't have an account?
                        <a href="#!" style="color: #393f81;">Register here</a>
                      </p>
                      <a href="#!" class="small text-muted">Terms of use.</a>
                      <a href="#!" class="small text-muted">Privacy policy</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class LoginFormComponent implements OnInit {
  private users$: Subject<User[]> = new Subject();
  ngOnInit(): void {}

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  submitForm() {
    this.http
      .post("http://localhost:5200/users/login", {
        email: this.form.get("email")?.value,
        password: this.form.get("password")?.value,
      })
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
