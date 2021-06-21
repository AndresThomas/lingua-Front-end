import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WebService } from 'src/app/services/web.service';

interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Student', sound: 'Woof!'},
    {name: 'Teacher', sound: 'Meow!'},
    
  ];

  form: FormGroup;
  loading = false;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router :Router,
    private request: WebService

    ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['',Validators.compose([Validators.email,Validators.required])],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }


  login() {

    const user = {
      first_name:this.form.value.firstName,
      last_name: this.form.value.lastName,
      rol:this.animalControl.value.name,
      username:this.form.value.username,
      password: this.form.value.password,
      email:this.form.value.email,
      phone_number:'0000000000'
    }
    console.log(user,' user')
    this.request.postRegistro(user).subscribe(
      myRequest =>{
        if (true) {
          console.log(myRequest);
        } else {
          this.error();
          this.form.reset();
        }
      },
      error=>{
        console.log(error)
      }
    )
    
    
  }

  error(){
    this._snackBar.open('Invalid user and password','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    });
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }


}
