import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  url = '';
  constructor(
    private router :Router,
    private http : WebService,
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
  }

}
