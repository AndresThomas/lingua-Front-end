import { Injectable } from '@angular/core';
import {  HttpClient  } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WebService {
  link = 'http://127.0.0.1:8000/';
  books = '';
  classLink='';
  list = '';
  private messageSource= new BehaviorSubject('default');
  currentMessage = this.messageSource.asObservable();
  constructor(
    private http:HttpClient
  ) { }

  /**********************************************/
  postLogin(data: any) { return this.http.post(this.link+'login/', data); }
  postRegistro(data: any) { return this.http.post(this.link + 'register/', data); }
  receiveRol(rol:string){this.messageSource.next(rol)}




  /**********************************************/

  getLink(){
    //return this.http.get(this.link,);
    return this.link;
  }
  getBooks(){
    return this.http.get(this.books);
  }
  getList(){
    return this.http.get(this.link);
  }

}
