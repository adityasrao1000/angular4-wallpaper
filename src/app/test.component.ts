import { Component } from '@angular/core';


@Component({
  selector: 'test-app',
  templateUrl: './test.html',
  styleUrls: ['./test.css', './app.component.css'],
})


export class Test {
  title = 'Categories';
  
  //initialize infinite scroll variables
  sum = 0;
  temp:any;

  categories =[
     
     {title:"aria", url:"/categories/aria", img:"./assets/img/aria.jpg"},
     {title:"black lagoon", url:"/categories/blacklagoon", img:"./assets/img/blacklagoon.jpg"},
     {title:"blackjack", url:"/categories/blackjack", img:"./assets/img/blackjack.jpg"}, 
     {title:"bleach", url:"/categories/bleach", img:"./assets/img/bleach.jpg"},
  
  ]; 
  
  allcategories =[
     {title:"Charlotte", url:"/categories/charlotte", img:"./assets/img/charlotte.jpg"},
     {title:"Code Geass", url:"/categories/codegeass", img:"./assets/img/codegeass.jpg"},     
     {title:"deathnote", url:"/categories/deathnote", img:"./assets/img/deathnote.jpg"},  
     {title:"durarara", url:"/categories/durarara", img:"./assets/img/durarara.jpg"},
     {title:"naruto", url:"/categories/naruto", img:"./assets/img/naruto.jpg"},
     {title:"onepiece", url:"/categories/onepiece", img:"./assets/img/onepiece.png"},  
     {title:"monster", url:"/categories/monster", img:"./assets/img/monster.jpg"},
     {title:"noragami", url:"/categories/noragami", img:"./assets/img/noragami.jpg"},
     {title:"vampire knight", url:"/categories/vampireknight", img:"./assets/img/vampireknight.png"},
     {title:"ghost in shell", url:"/categories/ghostinshell", img:"./assets/img/ghostinshell.jpg"},
     {title:"gundam seed", url:"/categories/gundamseed", img:"./assets/img/gundamseed.jpg"},
     {title:".hack", url:"/categories/hack", img:"./assets/img/hack.jpg"},
     {title:"inuyasha", url:"/categories/inuyasha", img:"./assets/img/inuyasha.jpg"},
     {title:"trigun", url:"/categories/trigun", img:"./assets/img/trigun.jpg"},
  ]; 

  // infinite scroll method
  onScrollDown () {

    const start = this.sum;
    this.sum += 2;

    //check if allcategories array is greater than sum
    if(this.sum < (this.allcategories.length + 2))
    {
    for (let i = start; i < this.sum; ++i) {

      this.temp = this.allcategories[i];
      this.categories.push(this.temp);
      
    }
    }
    
  }
 
}
