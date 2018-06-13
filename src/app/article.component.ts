import { Component } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.html',
  styleUrls: ['./article.css']
})
export class ArticleComponent {
  color = 'whitesmoke';
  over(): void {
   this.color = 'black';
  }
}
