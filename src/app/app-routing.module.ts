import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MainComponent } from './component/main/main.component';
import { RegisterComponent } from './component/register/register.component';
import { UsersTableComponent } from './component/users-table/users-table.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: MainComponent },

  { path: 'anasayfa', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersTableComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
