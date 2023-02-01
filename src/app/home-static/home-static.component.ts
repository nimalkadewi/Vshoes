import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../item";
import { ItemService } from "../item.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home-static",
  template: `
    <div class="container-fluid m-0 p-0">
      <app-navbar-static></app-navbar-static>

      <main>
        <!-- Hero Section Strat -->
        <section>
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  src="./assets/images/sample1.jpg"
                  class="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">
                  Responsive left-aligned hero with image
                </h1>
                <p class="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 me-md-2"
                    fdprocessedid="wngsba"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                    fdprocessedid="s1wq2n"
                  >
                    Default
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Hero Section end -->

        <!-- Item Section Start -->

        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Album example</h1>
              <p class="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" class="btn btn-primary my-2">Main call to action</a>
                <a href="#" class="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </div>
        </section>

        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col">
                <div class="card shadow-lg" *ngFor="let item of items$ | async">
                  <img
                    class="bd-placeholder-img card-img-top img-fluid"
                    src="./assets/images/{{ item.filePath }}"
                    width="100%"
                    height="225"
                  />

                  <div class="card-body">
                    <h5 class="card-text">{{ item.name }}</h5>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="btn-group mt-2">
                        <button
                          type="button"
                          class="btn btn-primary"
                          (click)="addItemToCart(item._id)"
                        >
                          ORDER
                        </button>
                      </div>
                      <h5 class="">{{ item.price }}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [],
})
export class HomeStaticComponent {
  items$: Observable<Item[]> = new Observable();

  constructor(private itemService: ItemService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  deleteItem(id: string): void {
    this.itemService.deleteItem(id).subscribe({
      next: () => this.fetchItems(),
    });
  }

  private fetchItems(): void {
    this.items$ = this.itemService.getItems();
  }

  addItemToCart(id: string) {
    this.http
      .post("http://localhost:5200/carts", {
        itemId: id,
      })
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
