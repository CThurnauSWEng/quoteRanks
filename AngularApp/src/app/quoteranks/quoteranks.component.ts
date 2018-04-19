import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute , Params, Router} from '@angular/router';

@Component({
  selector: 'app-quoteranks',
  templateUrl: './quoteranks.component.html',
  styleUrls: ['./quoteranks.component.css']
})
export class QuoteranksComponent implements OnInit {

  quoteDataAvailable =  false;
  quotes = [];
  quotesUnsorted = [];
  authorDataAvailable = false;
  authorId: any;
  quoteId: any;
  author = {
    'name' : "",
    'quotes' : []
  }
  errorsPresent = false;
  errorMessage = "";
  newArr = [];

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log("in quote ranks ngOnInit")
    this.getAuthorQuoteData();
 }

  upVote(quoteId,authorId){
    console.log("in upVote Here, quoteId: ", quoteId);
    this.quoteId = quoteId;
    let observable = this._httpService.getQuoteById(this.quoteId);
    observable.subscribe(data => {
      if (data['message']=="Error"){
        console.log("error getting quote")
      } else {
        var local_quote = data['data'][0];
        console.log("votes for this quote: ", local_quote['votes']);
        local_quote['votes'] = local_quote['votes'] + 1;
        let observerable = this._httpService.updateQuoteById(local_quote);
        observerable.subscribe(data => {
          if (data['message']=="Error"){
            console.log("error updating quote");
          } else {
            console.log("success updating quote");
            this.getAuthorQuoteData();
          }
        })
      }
    })
  }

  downVote(quoteId,authorId){
    console.log("in upVote Here, quoteId: ", quoteId);
    this.quoteId = quoteId;
    let observable = this._httpService.getQuoteById(this.quoteId);
    observable.subscribe(data => {
      if (data['message']=="Error"){
        console.log("error getting quote")
      } else {
        var local_quote = data['data'][0];
        console.log("votes for this quote: ", local_quote['votes']);
        local_quote['votes'] = local_quote['votes'] - 1;
        let observerable = this._httpService.updateQuoteById(local_quote);
        observerable.subscribe(data => {
          if (data['message']=="Error"){
            console.log("error updating quote");
          } else {
            console.log("success updating quote");
            this.getAuthorQuoteData();
          }
        })
      }
    })
  }

  deleteQuote(quoteId){
    console.log("In deleteQuote, quoteID: ", quoteId);
    this.quoteId = quoteId;
    let observable = this._httpService.deleteQuoteByID(this.quoteId);
    observable.subscribe(data => {
      if (data['message']=="Error"){
        console.log("error deleting quote");
      } else {
        console.log("success deleting quote");
        this.getAuthorQuoteData();
      } 
    })
  }
  
  getAuthorQuoteData() {
    this._route.params.subscribe((params: Params) => {
      this.authorId = params['author_id'];
      console.log("in noONInit 1: ", this.authorId);

      let observable = this._httpService.getAuthorById(this.authorId);
      observable.subscribe(data => {
        console.log("data from get author call 5: ", data['data'][0]['quotes'][0]['content']);
        if (data['message']=="Error"){
          console.log("error getting author")
        } else {
          console.log(data['data'][0]['name']);
          this.author['name'] = data['data'][0]['name'];
          this.authorDataAvailable = true;
          this.quotes = data['data'][0]['quotes'];
          this.quotes.sort(function (a,b){
            return b['votes'] - a['votes'];
          });
          this.quoteDataAvailable = true;
        }

      })
    }) 
  }
}
