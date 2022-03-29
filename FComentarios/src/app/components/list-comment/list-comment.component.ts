import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  listComments: Comment[] = [];
  constructor(private commentService :CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }
  getComments()
  {
    this.commentService.getListComment().subscribe(data =>
      {
        this.listComments = data;
      }, error => {console.log(error);})
  }


  deleteComment(id: any){
    this.commentService.deleteComment(id).subscribe(data =>{
      this.getComments();
    })
  }
}
