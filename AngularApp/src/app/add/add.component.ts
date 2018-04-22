import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  author: any;
  errorsPresent = false;
  errorMessage = "";
  result: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.author= {name: ""}
    this.errorMessage = "";
    this.result = {
      message: "",
      errorMessage: ""
    }
    console.log("in ngOnInit: result: ", this.result)
  }
  onSubmit(){
    console.log("onSubmit: ",this.author);
    console.log("Here a: result before calling validateData: ", this.result);
    this.validateData();
    console.log("Result from validateData call: ", this.result)
    if (this.result['message'] == "Too Short"){
      console.log("name too short detected");
      this.errorsPresent = true;
      this.errorMessage = this.result['errorMessage'];
      console.log("Here 2: errorMessage: ", this.errorMessage);
      console.log("here 3: result: ", this.result);
    } else {
      let observerable = this._httpService.findAuthorByName(this.author);
      observerable.subscribe(data => {
        console.log("number of authors found by findAuthorByName service: ",data['data'].length);
        if (data['data'].length > 0){
          this.result['message'] = "Duplicate";
          this.result['errorMessage'] = "Author already exists"
          console.log("Here 201: result: ", this.result)
          this.errorsPresent = true;
          this.errorMessage = "Author already exists";
        } else {
          console.log("in add component, result for querying for this author was not success");
          this.result['message']== "OK";
          this.result['errorMessage'] = "OK to add this Author";
          console.log("Here 301: result: ", this.result)
          console.log("no duplicate detected")
          let observable = this._httpService.addAuthor(this.author);
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
                this._router.navigate(['/dashboard']);
              }
          })
        }
      })
    }
  }

  validateData(){
    this.result['message'] = "In validateData";
    this.result['errorMessage'] = "Message from validateData"
    if (this.author['name'].length < 3){
      this.result['message'] = "Too Short";
      this.result['errorMessage'] = "Author name must be at least 3 characters"
      console.log("Here 101: result: ",this.result)
      return;
    }
  }
}
