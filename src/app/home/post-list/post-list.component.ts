import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from 'src/app/post/post.service';
import { Post } from 'src/app/post/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    console.log(this.posts);
    
  }

}
