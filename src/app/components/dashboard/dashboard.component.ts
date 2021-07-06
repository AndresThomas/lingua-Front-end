import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WebService } from 'src/app/services/web.service';
import { MatDialog } from '@angular/material/dialog';
import { ListDialogComponent } from './list-dialog/list-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url = '';
  message = '';
  is_admin = false;
  is_teacher = false;
  is_student = false;
  constructor(
    private router: Router,
    private http: WebService,
    private cookie: CookieService,
    public matDialog: MatDialog,
  ) { }

  getInClass() {
    /*this.http.getLink().subscribe(
      (request) =>{
        window.open(request.toString(),"_blank");
      },
      (error)=>{
        console.log(error)
      }
    )*/
    window.open(this.http.getLink(), "_blank");
  }
  getMyBooks() { }
  getList() {
    const dialogref = this.matDialog.open(ListDialogComponent,
      {
        width: '100%',
        height: '90%',
        data: { rol: this.cookie.get('rol').toLowerCase() }
      }
      )
  }

  addUser() {

  }

  ngOnInit(): void {
    this.message = this.cookie.get('rol').toLowerCase();

    if (this.message == 'admin') {
      this.is_admin = true;
    }
    if (this.message == 'teacher') {
      this.is_teacher = true;
    }
    if (this.message == 'student') {
      this.is_student = true;
    }
  }

}
