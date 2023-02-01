import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-regiseter-form",
  template: `
    <section class="vh-100" style="background-color: #1F4690;">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="./assets/images/1.png"
                    alt="login form"
                    class="img-fluid"
                    style="border-radius: 1rem 0 0 1rem; height:80vh; width:800px;"
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
                          type="text"
                          id="form2Example17"
                          formControlName="first_name"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >First Name</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          formControlName="last_name"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Last Name</label
                        >
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          formControlName="email"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Email</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          formControlName="username"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Username</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example17"
                          formControlName="password"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Password</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          formControlName="address"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Address</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          formControlName="phone_number"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form2Example17"
                          >Phone Number</label
                        >
                      </div>
                        
                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <p class="mb-5 pb-lg-2" style="color: #393f81;">
                        Have an account?
                        <a href="#!" style="color: #393f81;">Login</a>
                      </p>
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
export class RegiseterFormComponent implements OnInit {
  ngOnInit(): void {}

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      first_name: [""],
      last_name: [""],
      username: [""],
      email: [""],
      password: [""],
      address: [""],
      phone_number: [""],
      role: [""],
      /*avatar: [null]*/
    });
  }

  submitForm() {
    this.http
      .post("http://localhost:5200/users/register", {
        first_name: this.form.get("first_name")?.value,
        last_name: this.form.get("last_name")?.value,
        username: this.form.get("username")?.value,
        password: this.form.get("password")?.value,
        email: this.form.get("email")?.value,
        address: this.form.get("address")?.value,
        phone_number: this.form.get("phone_number")?.value,
        role: "customer",
      })
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
