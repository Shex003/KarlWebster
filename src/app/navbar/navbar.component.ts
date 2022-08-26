import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

openMedia1(){
  window.open("https://www.facebook.com/karlpwebster")
}
openMedia2(){
  window.open("https://www.instagram.com/karlpwebster/")
}
openMedia3(){
  window.open("https://twitter.com/kp_webster")
}
openMedia4(){
  window.open("https://www.instagram.com/cinevillephilia/")
}

  ngOnInit(): void {
    let headOffcet = $("#headline").offset().top

    $(window).scroll(()=>{

      let Wscroll = $(window).scrollTop();

      if(Wscroll>headOffcet+80){
         $("#headline").animate({display:'none'},2000)
         $("#mainnav").addClass("fixed-top animate__animated animate__slideInDown")
      }else{

          $("#headline").animate({display:'block'},500000)
          $("#mainnav").removeClass("fixed-top animate__animated animate__slideInDown")

      }

    })
      }
    }
