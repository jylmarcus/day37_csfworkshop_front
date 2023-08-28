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
  //base64ImageString = ""
  imgUrl = ""

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.params['id']
    this.postSvc.getPostImageById(this.postId)
      .then(result => {
        this.imgUrl = result['image']
        console.log(result['image'])
      })
    this.postSvc.getPostCommmentById(this.postId)
      .then(result => {
        this.comments = result['comments']
        console.log(result['comments'])
      })
  }
}
