import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
  listComments: Comment[] = [
    {title: 'Angular', 
    creator: 'Juan',
    text: 'Angular es una plataforma de desarrollo web que se basa en el framework de JavaScript de Google.',
    DateCreate: new Date()},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
