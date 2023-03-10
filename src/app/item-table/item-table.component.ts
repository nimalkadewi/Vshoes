import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../item";
import { ItemService } from "../item.service";

@Component({
  selector: "app-item-table",
  template: `
    <style>
      body {
        color: #566787;
        background: #f5f5f5;
        font-family: "Varela Round", sans-serif;
        font-size: 13px;
      }
      .table-responsive {
        margin: 30px 0;
      }
      .table-wrapper {
        background: #fff;
        padding: 20px 25px;
        border-radius: 3px;
        min-width: 1000px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      }
      .table-title {
        padding-bottom: 15px;
        background: #435d7d;
        color: #fff;
        padding: 16px 30px;
        min-width: 100%;
        margin: -20px -25px 10px;
        border-radius: 3px 3px 0 0;
      }
      .table-title h2 {
        margin: 5px 0 0;
        font-size: 24px;
      }
      .table-title .btn-group {
        float: right;
      }
      .table-title .btn {
        color: #fff;
        float: right;
        font-size: 13px;
        border: none;
        min-width: 50px;
        border-radius: 2px;
        border: none;
        outline: none !important;
        margin-left: 10px;
      }
      .table-title .btn i {
        float: left;
        font-size: 21px;
        margin-right: 5px;
      }
      .table-title .btn span {
        float: left;
        margin-top: 2px;
      }
      table.table tr th,
      table.table tr td {
        border-color: #e9e9e9;
        padding: 12px 15px;
        vertical-align: middle;
      }
      table.table tr th:first-child {
        width: 60px;
      }
      table.table tr th:last-child {
        width: 100px;
      }
      table.table-striped tbody tr:nth-of-type(odd) {
        background-color: #fcfcfc;
      }
      table.table-striped.table-hover tbody tr:hover {
        background: #f5f5f5;
      }
      table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
      }
      table.table td:last-child i {
        opacity: 0.9;
        font-size: 22px;
        margin: 0 5px;
      }
      table.table td a {
        font-weight: bold;
        color: #566787;
        display: inline-block;
        text-decoration: none;
        outline: none !important;
      }
      table.table td a:hover {
        color: #2196f3;
      }
      table.table td a.edit {
        color: #ffc107;
      }
      table.table td a.delete {
        color: #f44336;
      }
      table.table td i {
        font-size: 19px;
      }
      table.table .avatar {
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
      }
      .pagination {
        float: right;
        margin: 0 0 5px;
      }
      .pagination li a {
        border: none;
        font-size: 13px;
        min-width: 30px;
        min-height: 30px;
        color: #999;
        margin: 0 2px;
        line-height: 30px;
        border-radius: 2px !important;
        text-align: center;
        padding: 0 6px;
      }
      .pagination li a:hover {
        color: #666;
      }
      .pagination li.active a,
      .pagination li.active a.page-link {
        background: #03a9f4;
      }
      .pagination li.active a:hover {
        background: #0397d6;
      }
      .pagination li.disabled i {
        color: #ccc;
      }
      .pagination li i {
        font-size: 16px;
        padding-top: 6px;
      }
      .hint-text {
        float: left;
        margin-top: 10px;
        font-size: 13px;
      }
      /* Custom checkbox */
      .custom-checkbox {
        position: relative;
      }
      .custom-checkbox input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        margin: 5px 0 0 3px;
        z-index: 9;
      }
      .custom-checkbox label:before {
        width: 18px;
        height: 18px;
      }
      .custom-checkbox label:before {
        content: "";
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        background: white;
        border: 1px solid #bbb;
        border-radius: 2px;
        box-sizing: border-box;
        z-index: 2;
      }
      .custom-checkbox input[type="checkbox"]:checked + label:after {
        content: "";
        position: absolute;
        left: 6px;
        top: 3px;
        width: 6px;
        height: 11px;
        border: solid #000;
        border-width: 0 3px 3px 0;
        transform: inherit;
        z-index: 3;
        transform: rotateZ(45deg);
      }
      .custom-checkbox input[type="checkbox"]:checked + label:before {
        border-color: #03a9f4;
        background: #03a9f4;
      }
      .custom-checkbox input[type="checkbox"]:checked + label:after {
        border-color: #fff;
      }
      .custom-checkbox input[type="checkbox"]:disabled + label:before {
        color: #b8b8b8;
        cursor: auto;
        box-shadow: none;
        background: #ddd;
      }
      /* Modal styles */
      .modal .modal-dialog {
        max-width: 400px;
      }
      .modal .modal-header,
      .modal .modal-body,
      .modal .modal-footer {
        padding: 20px 30px;
      }
      .modal .modal-content {
        border-radius: 3px;
        font-size: 14px;
      }
      .modal .modal-footer {
        background: #ecf0f1;
        border-radius: 0 0 3px 3px;
      }
      .modal .modal-title {
        display: inline-block;
      }
      .modal .form-control {
        border-radius: 2px;
        box-shadow: none;
        border-color: #dddddd;
      }
      .modal textarea.form-control {
        resize: vertical;
      }
      .modal .btn {
        border-radius: 2px;
        min-width: 100px;
      }
      .modal form label {
        font-weight: normal;
      }
    </style>

    <div class="container-xl ">
      <div class="table-responsive ">
        <div class="table-wrapper ">
          <div class="table-title bg-dark">
            <div class="row ">
              <div class="col-sm-6 ">
                <h2>Manage <b>Items</b></h2>
              </div>
              <div class="col-sm-6">
                <a href="/adminform" class="btn btn-success" data-toggle="modal"
                  ><i class="material-icons">???</i> <span>Add New Item</span></a
                >
                <a
                  href="/item-delete"
                  class="btn btn-danger"
                  data-toggle="modal"
                  ><i class="material-icons">???</i> <span>Delete Item</span></a
                >
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <!--<span class="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label for="selectAll"></label>
                  </span>-->
                </th>
                <th>Item Name</th>
                <th>Item Photo</th>
                <th>Stock Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of items$ | async">
                <td>
                  <!--<span class="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="options[]"
                      value="1"
                    />
                    <label for="checkbox1"></label>
                  </span>
                </td>-->
                </td>

                <td>{{item.name}}</td>
                <td>
                  <img
                    class="bd-placeholder-img card-img-top w-25 "
                    src="../../assets/images/{{item.filePath}}"
                  />
                </td>
                <td>{{item.quantity}}</td>
                <td>LKR {{item.price}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!--<script defer>
      $(document).ready(function () {
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Select/Deselect checkboxes
        var checkbox = $('table tbody input[type="checkbox"]');
        $("#selectAll").click(function () {
          if (this.checked) {
            checkbox.each(function () {
              this.checked = true;
            });
          } else {
            checkbox.each(function () {
              this.checked = false;
            });
          }
        });
        checkbox.click(function () {
          if (!this.checked) {
            $("#selectAll").prop("checked", false);
          }
        });
      });
    </script>-->
  `,
  styles: [],
})
export class ItemTableComponent implements OnInit {
  items$: Observable<Item[]> = new Observable();

  constructor(private itemService: ItemService) {}

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
}
