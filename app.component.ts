import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './services.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from './user';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { ShowDataComponent } from './show-data/show-data.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'CRUD_PROJECT';
  constructor(public fb: FormBuilder,
    private router: Router,
    
    private apiServices: ServicesService) { this.mainForm() }


  regForm!: FormGroup;
  User: User[] = [];
  res:any;
  UserId:any;
  
  ngOnInit(): void {
   

      this.getUser()
      

  }

  mainForm() {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      city: ['', [Validators.required]]

    })
  }

  onSubmit() {

    console.log("submit formdata" + this.regForm)
    this.apiServices.addUser(this.regForm.value).subscribe(
      () => {
        this.regForm.reset();
        this.getUser();


      }
    )
  }

  // -- get single data of user
  getSingleUser(id:string){
    this.apiServices.getUser(id).subscribe(data=>{
      this.res=data;
    })

  }

  //-- get all data 
  getUser() {
    this.apiServices.getUsers()
      .subscribe(data => {
        this.User = data;
        console.log(this.User)
      })
  }


  //------ delete user
  onDelete(id: string, i: any) {
    if (window.confirm('do you want to delete data')) {
      console.log("deleted data " + id);
      this.apiServices.deleteUser(id).subscribe(data => {
        this.User.splice(i, 1);
      });
    }







    //--- on edit 

  }

}



