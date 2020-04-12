import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../../models/UserModel';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {
}
  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://jsonplaceholder.typicode.com/posts')
  }
}
