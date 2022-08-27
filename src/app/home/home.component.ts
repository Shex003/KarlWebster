import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private http:HttpClient) { }

// registerForm:FormGroup=new FormGroup({
//   name: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
//   email: new FormControl(null, [Validators.required, Validators.email]),
// });

// submitRegister(forminfo:FormGroup)
// {
// console.log(forminfo.value);
// }
openBio1(){
  window.open("https://www.amazon.co.uk/B%C3%AAte-Jour-Intimate-Adventures-Ugly/dp/0007312741/ref=la_B0042G4LOE_1_1?ie=UTF8&qid=1366040922&sr=1-1")
}
openNew1(){
  window.open("https://www.amazon.co.uk/dp/9083135500/")
}
openNwe2(){
  window.open("https://www.amazon.co.uk/Lives-Loves-Hana-Lee/dp/9083135519/")
}


body:any = $("html");
isSIGNUPSubmitted:boolean =false;
isSIGNUPSuccess:boolean =false;
isGiveMeGiftGreatWritingSubmitted:boolean =false;
isGiveMeGiftGreatWritingSuccess:boolean =false;

  ngOnInit(): void {

    $("#navlink").click (() =>{
    let bookmark = $("#bookmark").offset().top;
    this.body.animate({scrollTop:bookmark-190},100)
    })
  }
  //
  onSIGNUPSubmit(form:NgForm) {
    this.isSIGNUPSubmitted = true;

    if (form.valid) {
      form.value['type'] = 'sign_up';
      this.http
        .post(environment.API_URL + '/forms', form.value)
        .subscribe((res) => {
          this.isSIGNUPSuccess = true;
    this.isSIGNUPSubmitted = false;
          form.reset();
          setTimeout(() => {
            this.isSIGNUPSuccess = false;
          }, 5000);
        });
    }

  }
  onGiveMeGiftGreatWritingSubmit(form:NgForm) {
    this.isGiveMeGiftGreatWritingSubmitted = true;
    if (form.valid) {
      form.value['type'] = 'give_me_gift_great_writing';
      this.http
        .post(environment.API_URL + '/forms', form.value)
        .subscribe((res) => {
          this.isGiveMeGiftGreatWritingSuccess = true;
    this.isGiveMeGiftGreatWritingSubmitted = false;
          form.reset();
          setTimeout(() => {
            this.isGiveMeGiftGreatWritingSuccess = false;
          }, 5000);
        });
    }

  }
}
