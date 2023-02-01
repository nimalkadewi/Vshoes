import { Injectable } from "@angular/core";
import {Observable, Subject} from "rxjs";
import { Order } from "./order";
import { HttpClient } from "@angular/common/http";
import {Item} from "./item";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private url = "http://localhost:5200";
  private orders$: Subject<Order[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  private refreshOrders() {
    this.httpClient.get<Order[]>(`${this.url}/orders`).subscribe((orders) => {
      this.orders$.next(orders);
    });
  }

  getOrders(): Subject<Order[]> {
    this.refreshOrders();
    return this.orders$;
  }

  deleteOrder(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/orders/${id}`, {
      responseType: "text",
    });
  }


}
