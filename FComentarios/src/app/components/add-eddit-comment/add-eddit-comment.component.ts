import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-eddit-comment',
  templateUrl: './add-eddit-comment.component.html',
  styleUrls: ['./add-eddit-comment.component.css']
})
export class AddEdditCommentComponent implements OnInit {
  addComment: FormGroup; 

  constructor(private fb: FormBuilder) { 
    this.addComment = this.fb.group({
      title: ['', Validators.required],
      creator: ['', Validators.required],
      text: ['', Validators.required]});
  }

  ngOnInit(): void {
  }
  add() {
    console.log(this.addComment)
    const commentNew: Comment ={
      title: this.addComment.get('title')?.value,
      creator: this.addComment.get('creator')?.value,
      text: this.addComment.get('text')?.value,
      DateCreate: new Date()
    }
  }

}
