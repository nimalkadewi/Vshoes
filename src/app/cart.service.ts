import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Cart } from "./cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private url = "http://localhost:5200";
  private carts$: Subject<Cart[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  private refreshCarts() {
    this.httpClient.get<Cart[]>(`${this.url}/carts`).subscribe((carts) => {
      this.carts$.next(carts);
    });
  }

  getCarts(): Subject<Cart[]> {
    this.refreshCarts();
    return this.carts$;
  }
}
