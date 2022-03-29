import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private myAppUrl = "https://localhost:44340";
  private myApiUrl = 'api/comment';
  constructor(private http: HttpClient) { }

  getListComment() : Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl)
};

deleteComment(id : number): Observable<any>{
  return this.http.delete(this.myAppUrl + this.myApiUrl + '/' + id);
}
getComment(id: number): Observable<any> {
  return this.http.get(this.myAppUrl + this.myApiUrl + '/'+ id);
}
saveComment(comment: Comment): Observable<any> {
  return this.http.post(this.myAppUrl + this.myApiUrl, comment);
}
  
}

