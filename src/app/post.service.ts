import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient)

  constructor() { }

  uploadPost(comment: string, elemRef: ElementRef): Promise<any> {
    const data = new FormData()
    data.set("comments", comment)
    data.set("image", elemRef.nativeElement.files[0])

    return firstValueFrom(this.http.post<any>('api/post', data))
  }

  getPostImageById(postId: string) {
    return firstValueFrom(this.http.get<any>(`api/image/${postId}`))
  }

  getPostCommmentById(postId: string) {
    return firstValueFrom(this.http.get<any>(`api/comments/${postId}`))
  }
}
