import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ServicesService } from './services.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowDataComponent } from './show-data/show-data.component';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//import { ActivatedRoute } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,RouterModule,AppRoutingModule


  ],
  exports:[RouterModule],
  //providers: [ActivatedRoute,],
  bootstrap: [AppComponent]
})
export class AppModule { }
