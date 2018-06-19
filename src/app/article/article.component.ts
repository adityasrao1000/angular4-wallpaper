import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  color = 'whitesmoke';
  over(): void {
    this.color = 'black';
  }
}
