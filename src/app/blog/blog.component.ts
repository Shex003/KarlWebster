import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

dataPublic: any[]=[];

  constructor(private _BlogService:BlogService) { }

  openCina(){
    window.open("https://www.instagram.com/cinevillephilia/")
  }
  ngOnInit(): void {
    this._BlogService.getData('public').subscribe((response)=>{
this.dataPublic = response.data;
    })
  }

}
