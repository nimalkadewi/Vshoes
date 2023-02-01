import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeStaticComponent } from "./home-static/home-static.component";
import { AboutComponent } from "./about/about.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { RegiseterComponent } from "./regiseter/regiseter.component";
import { AdminComponent } from "./admin/admin.component";
import { AdminTableComponent } from "./admin-table/admin-table.component";
import { AdminChatFieldComponent } from "./admin-chat-field/admin-chat-field.component";
import { ChatComponent } from "./chat/chat.component";
import { ChatbtnComponent } from "./chatbtn/chatbtn.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { Avatar2Component } from "./avatar2/avatar2.component";
import { ItemTableComponent } from "./item-table/item-table.component";
import { ItemTableFieldComponent } from "./item-table-field/item-table-field.component";
import { ItemDeleteComponent } from "./item-delete/item-delete.component";
import { HomeDynamicComponent } from "./home-dynamic/home-dynamic.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeStaticComponent },
  { path: "about", component: AboutComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegiseterComponent },
  { path: "admin", component: AdminComponent },
  { path: "admintable", component: AdminTableComponent },
  { path: "adminchat", component: AdminChatFieldComponent },
  { path: "chat", component: ChatComponent },
  { path: "chatbtn", component: ChatbtnComponent },
  { path: "avatar", component: AvatarComponent },
  { path: "avatar2", component: Avatar2Component },
  { path: "itemtable1", component: ItemTableComponent },
  { path: "itemtable-feild", component: ItemTableFieldComponent },
  { path: "item-delete", component: ItemDeleteComponent },
  { path: "home", component: HomeDynamicComponent },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
