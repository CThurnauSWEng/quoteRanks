import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quoteadd',
  templateUrl: './quoteadd.component.html',
  styleUrls: ['./quoteadd.component.css']
})
export class QuoteaddComponent implements OnInit {
  quote: any;
  errorsPresent = false;
  errorMessage = "";
  author = {
    'name' : "",
    'quotes' : []
  }
  authorDataAvailable = false;
  authorId: any;


  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.quote= {content: ""}
    this.errorMessage = "";
    this._route.params.subscribe((params: Params) => {
      this.authorId = params['author_id'];
      console.log("in noONInit 1: ", this.authorId);

      let observable = this._httpService.getAuthorById(this.authorId);
      observable.subscribe(data => {
        console.log("data from get author call: ", data);
        if (data['message']=="Error"){
          console.log("error getting author")
        } else {
          console.log(data['data'][0]['name']);
          this.author['name'] = data['data'][0]['name'];
          this.authorDataAvailable = true;
        }

      })
    })
  }
  onSubmit(){
    console.log("onSubmit: ",this.quote);
    console.log("onSubmit: author stuff: ", this.authorId, this.author);
    
    let observable = this._httpService.addQuote(this.quote, this.authorId);
    observable.subscribe(data => {
      console.log("from add: 1", data);
      if (data['message']=="Error"){
        this.errorsPresent = true;
        console.log("data['error']: ", data['error'])
        console.log("data['error']['errors']['name']['message']: ", data['error']['errors']['name']['message'])
        this.errorMessage = data['error']['errors']['name']['message'];
      } else {
        this.errorsPresent = false;
        this.errorMessage = "";
      }
    })
    this.quote = {name: ""}
    this._router.navigate(['/dashboard']);
    
  }

}

