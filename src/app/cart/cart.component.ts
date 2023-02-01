import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../order";
import { Cart } from "../cart";
import { OrderService } from "../order.service";
import { CartService } from "../cart.service";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  template: `
    <app-navbar-dynamic></app-navbar-dynamic>
    <section class="h-100" style="background-color: #fff;">
      <div class="container h-100 py-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <form [formGroup]="form" (ngSubmit)="submitForm()">
            <div class="col-10">
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4" *ngFor="let cart of carts$ | async">
                  <div
                    class="row d-flex justify-content-between align-items-center"
                  >
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img src="" class="img-fluid rounded-3" alt="shose" />
                    </div>
                    <input
                      type="text"
                      formControlName="itemId"
                      value="Hellloo}}}"
                      hidden
                    />
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">
                        {{ cart.item_details[0].name }}
                      </p>
                      <p>
                        <span class="text-muted"
                          >Gender: {{ cart.item_details[0].gender }}</span
                        >&nbsp;
                        <span class="text-muted"
                          >Type: {{ cart.item_details[0].type }}</span
                        >
                      </p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <h5>Quantity: 1</h5>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">{{ cart.item_details[0].price }}</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger"
                        ><i class="fas fa-trash fa-lg"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div
                  class="card-body d-grid gap-2 d-flex flex-row-reverse bd-highlight"
                >
                  <h5 class="p-2 bd-highlight">Total 7500.00</h5>
                </div>
              </div>

              <div class="card">
                <div class="card-body d-grid gap-2">
                  <button
                    type="submit"
                    class="btn btn btn-success btn-block btn-lg "
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class CartComponent implements OnInit {
  carts$: Observable<Cart[]> = new Observable();
  temp: Observable<Cart[]> = new Observable();
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private cartService: CartService,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      itemId: [""],
    });
  }

  ngOnInit(): void {
    this.fetchCarts();
  }

  private fetchCarts(): void {
    this.carts$ = this.cartService.getCarts();
    this.temp = this.cartService.getCarts();
    console.log(this.temp);
  }

  submitForm() {
    console.log(this.carts$);
    this.http
      .post("http://localhost:5200/orders_f", {
        itemId: this.form.get("itemId")?.value,
        quantity: 2,
        userId: "63d810257cdd9b6d9c8ce6d3",
      })
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
