import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url = '';
  message ='';
  subscription: Subscription | undefined;
  is_admin = false;
  is_teacher= false;
  is_student= false;
  constructor(
    private router :Router,
    private http : WebService,
    private cookie: CookieService
  ) { }

  getInClass(){
    /*this.http.getLink().subscribe(
      (request) =>{
        window.open(request.toString(),"_blank");
      },
      (error)=>{
        console.log(error)
      }
    )*/
    window.open(this.http.getLink(),"_blank");
  }
  getMyBooks(){}
  getList(){}

  addUser(){
    
  }

  ngOnInit(): void {
    this.message = this.cookie.get('rol').toLowerCase();
    console.log(this.message, 'im message')
    //this.subscription = this.http.currentMessage.subscribe(message => this.message = message)
    console.log(this.message,' <-----');
    if(this.message == 'admin'){
      this.is_admin= true;
    }
    if(this.message == 'teacher'){
      this.is_teacher= true;
    }
    if(this.message == 'student'){
      this.is_student= true;
    }
  }

}
