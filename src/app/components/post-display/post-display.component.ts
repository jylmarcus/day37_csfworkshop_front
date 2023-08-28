import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit{

  postSvc = inject(PostService)
  activatedRoute = inject(ActivatedRoute)

  postId = ""
  comments = ""
  base64ImageString = ""

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.params['id']
    this.postSvc.getPostById(this.postId)
      .then(result => {
        this.comments = result['comments']
        this.base64ImageString = result['image']
        console.log(result['image'])
      })
  }
}
