import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { RegisterComponent } from 'src/app/dashboard/register/register.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent,
     RegisterComponent,MyStudentsComponent, BottombarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
