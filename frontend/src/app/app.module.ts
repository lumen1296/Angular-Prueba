import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ModifyUsersComponent } from './modify-users/modify-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { userService } from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUsersComponent,
    ModifyUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
