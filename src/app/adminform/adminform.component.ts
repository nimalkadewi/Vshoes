import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-adminform",
  template: `
    <div class="container px-5 my-5">
      <h3>ADD ITEMS</h3>
      <form
        id="contactForm"
        [formGroup]="form"
        (ngSubmit)="submitForm()"
        method="post"
        class="image-upload"
        enctype="multipart/form-data"
      >
        <div class="mb-3">
          <label class="form-label" for="name">Name</label>
          <input
            class="form-control"
            id="name"
            formControlName="name"
            type="text"
            placeholder="Name"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="name:required">
            Name is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            formControlName="description"
            placeholder="Description"
            style="height: 10rem;"
            data-sb-validations="required"
          ></textarea>
          <div class="invalid-feedback" data-sb-feedback="description:required">
            Description is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="unitPrice">Unit Price</label>
          <input
            class="form-control"
            id="unitPrice"
            type="text"
            formControlName="price"
            placeholder="Unit Price"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="unitPrice:required">
            Unit Price is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="quantity">Quantity</label>
          <input
            class="form-control"
            id="quantity"
            type="text"
            formControlName="quantity"
            placeholder="Quantity"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="quantity:required">
            Quantity is required.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="gender">Gender</label>
          <select
            class="form-select"
            id="gender"
            formControlName="gender"
            aria-label="Default select example"
          >
            <option selected>Please Select</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="type">Type</label>
          <select
            class="form-select"
            id="type"
            formControlName="type"
            aria-label="Default select example"
          >
            <option selected>Please Select</option>
            <option value="shoe">Shoe</option>
            <option value="slippers">Slippers</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" for="file">File</label>
          <input
            class="form-control"
            id="file"
            type="file"
            name="upload-file"
            data-sb-validations="required"
          />
          <div class="invalid-feedback" data-sb-feedback="file:required">
            File is required.
          </div>
        </div>
        <div class="d-none" id="submitSuccessMessage">
          <div class="text-center mb-3">
            <div class="fw-bolder">Form submission successful!</div>
            <p>To activate this form, sign up at</p>
            <a href="https://startbootstrap.com/solution/contact-forms"
              >https://startbootstrap.com/solution/contact-forms</a
            >
          </div>
        </div>
        <div class="d-none" id="submitErrorMessage">
          <div class="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <div class="d-grid">
          <input
            class="btn btn-primary btn-lg"
            id="submitButton"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
  `,
  styles: [],
})
export class AdminformComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: [""],
      description: [""],
      price: [""],
      quantity: [""],
      gender: [""],
      type: [""],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    const form: HTMLFormElement = document.querySelector(".image-upload")!;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formattedFormData = new FormData(form);
      const data = formattedFormData.get("upload-file") as File;
      const fileName = data["name"]; // no error

      this.http
        .post("http://localhost:5200/items/", {
          name: this.form.get("name")?.value,
          description: this.form.get("description")?.value,
          price: parseInt(this.form.get("price")?.value),
          quantity: parseInt(this.form.get("quantity")?.value),
          gender: this.form.get("gender")?.value,
          type: this.form.get("type")?.value,
          filePath: fileName,
        })
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
    });
  }
}
