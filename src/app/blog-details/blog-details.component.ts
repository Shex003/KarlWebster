import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  API_URL =environment.API_URL

slug!:string ;
dataPublic:any;
  constructor(private route:ActivatedRoute,private _BlogService:BlogService) {
    this.slug = this.route.snapshot.params['slug'];
    console.log('this.slug',this.slug)
   }


   ngOnInit(): void {
     this._BlogService.getBlogDetails(this.slug).subscribe((response)=>{
 this.dataPublic = response.data;
 console.log('this.dataPublic',this.dataPublic)
     })
   }

 }
