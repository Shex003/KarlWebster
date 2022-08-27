import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }

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


  ngOnInit(): void {

    $("#navlink").click (() =>{
    let bookmark = $("#bookmark").offset().top;
    this.body.animate({scrollTop:bookmark-190},100)
    })
  }

}
