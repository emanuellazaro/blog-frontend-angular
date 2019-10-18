import { Post } from './post.model';

export class PostService {
  private posts: Post[] = [
    new Post('Hello World', 'Fist blog post!', true),
    new Post('Serverless Architecture', 'Blog post about serverless architecture', true),
    new Post('About', 'Hi, my name is Emanuel Lazaro!', true)
  ];

  getPosts() {
    return this.posts.slice();
  }

  getPost(post_slug: string) {
    var i: number;
    for (i = 0; i < this.posts.length; i++) {
      if (post_slug === this.posts[i].slug) {
        return this.posts[i];
      }
    }
  } 
}

