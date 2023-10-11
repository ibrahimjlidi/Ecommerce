import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post.model'; // Assuming you have a BlogPost interface
import { BlogService } from './blog.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogPosts().subscribe(posts => {
      this.blogPosts = posts;
    });
  }
}
