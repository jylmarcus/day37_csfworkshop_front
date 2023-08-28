import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{

  @ViewChild('imageUpload')
  imageUpload!: ElementRef

  form!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private postSvc: PostService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      comment: this.fb.control<string>('')
    })
  }

  submitPost() {
    const value = this.form.value
    this.postSvc.uploadPost(value['comment'], this.imageUpload)
      .then(resp => {
        console.info('>>> resp: ', resp)
      })
      .catch(error => {
        console.error('error: ', error)
      })
  }
}
