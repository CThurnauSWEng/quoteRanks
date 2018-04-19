import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors');
  }

  deleteAuthor(id){
    return this._http.delete('/author/'+id);
  }

  addAuthor(author){
    console.log("in service, author: ", author);
    return this._http.post('/author/',author);
  }

  addQuote(quote, authorId){
    console.log("*************** in service, quote: ", quote)
    console.log("*************** in service, authorId: ", authorId)
    var quoteAuthorId = {
      quote: quote,
      authorId : authorId
    }
    
    console.log("*************** in service, quoteAuthorId: ", quoteAuthorId)
    return this._http.post('/createquote/',quoteAuthorId);
  }

  getAuthorById(id){
    console.log("in service getAuthorById, id: ", id);
    return this._http.get('/author/'+id);
  }

  getQuoteById(id){
    console.log("in service getQuoteById, id: ", id);
    return this._http.get('/quote/'+id);
  }

  updateAuthorById(author){
    console.log("in service updateAuthorById, author: ", author);
    var url_string = '/author/' + author._id;
    console.log("url_string: ", url_string);
    return this._http.put(url_string, author)
  }

  updateQuoteById(quote){
    console.log("in service updateQuoteById, quote: ", quote);
    var url_string = '/quote/' + quote._id;
    console.log("url_string: ", url_string);
    return this._http.put(url_string, quote)
  }

  deleteQuoteByID(quoteId){
    console.log("in service deleteQuoteById, quoteid", quoteId);
    var url_string = '/quote/' + quoteId;
    console.log("url_string: ", url_string);
    return this._http.delete(url_string);
  }
}
