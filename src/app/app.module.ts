import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './dashboard/login/login.component';
import { PostListComponent } from './home/post-list/post-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePostComponent } from './dashboard/create-post/create-post.component';
import { EditPostComponent } from './dashboard/edit-post/edit-post.component';
import { PostItemComponent } from './home/post-list/post-item/post-item.component';
import { PostService } from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    LoginComponent,
    PostListComponent,
    DashboardComponent,
    CreatePostComponent,
    EditPostComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
