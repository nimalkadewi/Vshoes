import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegiseterComponent } from "./regiseter/regiseter.component";
import { RegiseterFormComponent } from "./regiseter-form/regiseter-form.component";
import { HomeStaticComponent } from "./home-static/home-static.component";
import { HomeDynamicComponent } from "./home-dynamic/home-dynamic.component";
import { NavbarStaticComponent } from "./navbar-static/navbar-static.component";
import { NavbarDynamicComponent } from "./navbar-dynamic/navbar-dynamic.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { ProfileFormComponent } from "./profile-form/profile-form.component";
import { ProfileComponent } from "./profile/profile.component";
import { AboutComponent } from "./about/about.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { OrdertableComponent } from "./ordertable/ordertable.component";
import { AdminformComponent } from "./adminform/adminform.component";
import { AdminTableComponent } from "./admin-table/admin-table.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminChatFieldComponent } from "./admin-chat-field/admin-chat-field.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { Avatar2Component } from "./avatar2/avatar2.component";
import { ChatComponent } from "./chat/chat.component";
import { ChatbtnComponent } from "./chatbtn/chatbtn.component";
import { ChattopicComponent } from "./chattopic/chattopic.component";
import { ItemDeleteComponent } from "./item-delete/item-delete.component";
import { ItemTableComponent } from "./item-table/item-table.component";
import { ItemTableFieldComponent } from "./item-table-field/item-table-field.component";
import { CartComponent } from "./cart/cart.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegiseterComponent,
    RegiseterFormComponent,
    HomeStaticComponent,
    HomeDynamicComponent,
    NavbarStaticComponent,
    NavbarDynamicComponent,
    HomeAdminComponent,
    ProfileFormComponent,
    ProfileComponent,
    AboutComponent,
    AdminComponent,
    AdminDashboardComponent,
    OrdertableComponent,
    AdminformComponent,
    AdminTableComponent,
    AdminChatFieldComponent,
    AvatarComponent,
    Avatar2Component,
    ChatComponent,
    ChatbtnComponent,
    ChattopicComponent,
    ItemDeleteComponent,
    ItemTableComponent,
    ItemTableFieldComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
