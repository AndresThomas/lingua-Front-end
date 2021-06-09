import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyStudentsComponent } from './my-students/my-students.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      {path:'class',component:HomeComponent},//used for give class -> student
      {path:'myStudents',component:MyStudentsComponent}, // admin students -> teacher
    ]
 },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
