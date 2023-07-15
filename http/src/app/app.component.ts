import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient, private postService : PostService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postService.createPost(postData).subscribe((res)=>{
      console.log("Posted!");
      this.onFetchPosts();
    })
  }

  onFetchPosts() {
    this.postService.fetchPosts().subscribe((res)=>{
      this.loadedPosts = res;
    });
  }

  onClearPosts() {
    this.postService.clearPosts().subscribe((res)=>{
      this.loadedPosts = []
    })
  }
}
