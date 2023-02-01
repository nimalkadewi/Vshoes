import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../item";
import { Order } from "../order";
import { OrderService } from "../order.service";

@Component({
  selector: "app-ordertable",
  template: `
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="container mt-3">
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Item Id / Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let order of orders$ | async">
                <td>{{ order._id }}</td>
                <td>{{ order.customer[0].first_name }}</td>
                <td>{{ order.customer[0].last_name }}</td>
                <td>{{ order.customer[0].email }}</td>
                <td>{{ order.customer[0].phone_number }}</td>
                <td>
                  <div *ngFor="let item of order.items">
                    Item Id: {{ item.itemId }}<br />
                    Quantity: {{ item.quantity }}
                  </div>
                </td>
                <td>{{ order.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- The Modal -->
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">Modal body..</div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class OrdertableComponent implements OnInit {
  orders$: Observable<Order[]> = new Observable();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  private fetchOrders(): void {
    this.orders$ = this.orderService.getOrders();
  }
}
