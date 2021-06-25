import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RegisterComponent } from '../dashboard/register/register.component';
import { MyStudentsComponent } from './my-students/my-students.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'students',component:MyStudentsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
