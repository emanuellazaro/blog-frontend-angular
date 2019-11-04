import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  slug: string;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log("here");
    this.route.params.subscribe(
      (params: Params) => {
        this.slug = params['slug'];
        this.post = this.postService.getPost(this.slug);
      }
    );
  }

}
