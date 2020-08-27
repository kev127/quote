import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Walking on water and developing software from a specification are easy if both are frozen.', '~Marvin Minsky',new Date(2021,3,14),'Jane'),
    new Quote('You can only become truly accomplished at something you love.', '~Maya Angelou',new Date(2022,6,9), 'Alice'),
    new Quote('A conscious human is driven by their conscience, not popular opinion.', '~Paul Graham',new Date(2022,1,12), 'Shan'),

  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].text}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.iscompleteDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }
}