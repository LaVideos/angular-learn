import {Component, OnInit} from '@angular/core';
import {CommentsJsonInterface} from "../../../interfaces";
import {CommentsService} from "../../../services";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  comments:CommentsJsonInterface[];

  constructor(private commentsService:CommentsService) {
  }

  ngOnInit(): void {
    this.commentsService.getAll().subscribe(value => this.comments = value);
  }

}
