import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router'
import { ShowDataComponent } from './show-data/show-data.component';
import { AppComponent } from './app.component';

const routes:Routes=[
  {path:'', pathMatch:'full' , redirectTo :'home'},
  {path:'home', component:AppComponent},
  {path:'edit-data' , component:ShowDataComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
