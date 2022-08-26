import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {

  }

}
