import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class WebService {
  link = 'http://127.0.0.1:8000/';
  books = '';
  classLink='';
  list = '';
  
  constructor(
    private http:HttpClient,
  ) { }

  /**********************************************/
  postLogin(data: any) { return this.http.post(this.link, data); }
  postRegistro(data: any) { return this.http.post(this.link + 'register/', data); }





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
