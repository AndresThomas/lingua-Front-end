import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyStudentsComponent } from './my-students/my-students.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      {path:'',component:HomeComponent},
      {path:'myStudents',component:MyStudentsComponent},
      {path:'',component:HomeComponent},
      {path:'',component:HomeComponent},
      {path:'',component:HomeComponent},      
    ]
 },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
