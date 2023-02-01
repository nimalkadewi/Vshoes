import { Component } from "@angular/core";

@Component({
  selector: "app-item-table-field",
  template: `
    <div class="container-fluid">
      <div class="row">
        <app-admin-dashboard class="col-sm-2 "></app-admin-dashboard>

        <app-item-table class="col-sm-8"></app-item-table>
      </div>
    </div>
  `,
  styles: [],
})
export class ItemTableFieldComponent {}
