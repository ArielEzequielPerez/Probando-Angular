import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  id: number;
  comment: any;

  constructor(private aRoute: ActivatedRoute, private _commentService: CommentService) { 
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComments();
  }
  getComments() {
    this._commentService.getComment(this.id).subscribe(data => {
      this.comment = data;
    }, error => {
      console.log(error);
    })
  }

}
