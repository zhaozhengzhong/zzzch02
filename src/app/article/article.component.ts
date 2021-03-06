import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  article: Article
  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io', 3);
  }

  ngOnInit(): void {
  }
  voteup() {
    this.article.voteup();

  }
  votedown() {
    this.article.votedown();
  }
}
