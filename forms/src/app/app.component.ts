import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formData : NgForm;
  // formSubmit(form : NgForm){
  //   console.log("Form Submitted");
  //   console.log(form);
  // }

  formSubmit(){
    console.log(this.formData);
  }
}
