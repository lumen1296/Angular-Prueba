import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ModifyUsersComponent } from './modify-users/modify-users.component';

const routes: Routes = [
  {
    path: 'Create',
    component: CreateUsersComponent
  },
  {
    path: 'List',
    component: ListUsersComponent
  },
  {
    path: 'Modify/:id',
    component: ModifyUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
