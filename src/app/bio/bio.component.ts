import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor() { }
openBio0(){
  window.open("http://betedejour.blogspot.com/2007/12/beginning-of-great-adventure.html")
}

openBio1(){
  window.open("https://www.amazon.co.uk/B%C3%AAte-Jour-Intimate-Adventures-Ugly/dp/0007312741/ref=la_B0042G4LOE_1_1?ie=UTF8&qid=1366040922&sr=1-1")
}
openBio4(){
  window.open("https://www.amazon.co.uk/Books-Unofficial-Tourists-Guide-Second-Life/dp/0752226460/ref=sr_1_1?s=books&ie=UTF8&qid=1453398479&sr=1-1&keywords=second+life+tourists+guide")
}
openBio401(){
  window.open("https://www.amazon.co.uk/London-Insiders-Guide-2nd/dp/0954831810/ref=sr_1_1?s=books&ie=UTF8&qid=1453398768&sr=1-1")
}




  ngOnInit(): void {
  }
}
