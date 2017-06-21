import { Component } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.html',
  styleUrls: ['./article.css']
})
export class Article { 
  color:string="whitesmoke";
  over():void{
	 this.color="black";
  }  
}