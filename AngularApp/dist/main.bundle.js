webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/dashboard']\">Home</a>\n\n<form (submit)=\"onSubmit()\">\n    <!-- use the json pipe to see how newTask changes in real time -->\n    <p> {{ author | json }} </p>\n    <input type=\"text\" name=\"author.name\" [(ngModel)]=\"author.name\" />\n    <p *ngIf=\"errorsPresent\">{{ errorMessage }}</p>\n    <input type=\"submit\" value=\"Add Author\" />\n</form>\n\n"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddComponent = /** @class */ (function () {
    function AddComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.errorsPresent = false;
        this.errorMessage = "";
    }
    AddComponent.prototype.ngOnInit = function () {
        this.author = { name: "" };
        this.errorMessage = "";
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("onSubmit: ", this.author);
        var observable = this._httpService.addAuthor(this.author);
        observable.subscribe(function (data) {
            console.log("from add: 1", data);
            if (data['message'] == "Error") {
                _this.errorsPresent = true;
                console.log("data['error']: ", data['error']);
                console.log("data['error']['errors']['name']['message']: ", data['error']['errors']['name']['message']);
                _this.errorMessage = data['error']['errors']['name']['message'];
            }
            else {
                _this.errorsPresent = false;
                _this.errorMessage = "";
            }
        });
        this.author = { name: "" };
        this._router.navigate(['/dashboard']);
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("./src/app/add/add.component.html"),
            styles: [__webpack_require__("./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute,
            router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var quoteadd_component_1 = __webpack_require__("./src/app/quoteadd/quoteadd.component.ts");
var quoteranks_component_1 = __webpack_require__("./src/app/quoteranks/quoteranks.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'quote/:author_id', component: quoteranks_component_1.QuoteranksComponent },
    { path: 'quoteadd/:author_id', component: quoteadd_component_1.QuoteaddComponent },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n     Favorite authors\n    </h1>\n  </div>\n  \n  <router-outlet></router-outlet>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var quoteranks_component_1 = __webpack_require__("./src/app/quoteranks/quoteranks.component.ts");
var quoteadd_component_1 = __webpack_require__("./src/app/quoteadd/quoteadd.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js"); // <-- import FormsModule.
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                add_component_1.AddComponent,
                edit_component_1.EditComponent,
                quoteranks_component_1.QuoteranksComponent,
                quoteadd_component_1.QuoteaddComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/add']\">Add an Author</a>\n\n<div *ngIf=\"authorDataAvailable\">\n  <table>\n    <thead>\n      <tr>\n        <th>Author</th>\n        <th>Actions available</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let author of authors\">\n        <td>{{author.name}}</td>\n        <td><button [routerLink]=\"['/quote',author._id]\">View</button><button [routerLink]=\"['/edit',author._id]\">Edit an Author</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_httpService) {
        this._httpService = _httpService;
        this.authors = [];
        this.authorDataAvailable = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("1");
        this.getAuthorsFromService();
    };
    DashboardComponent.prototype.deleteAuthor = function (id) {
        var _this = this;
        console.log("delete author - id: ", id);
        var observable = this._httpService.deleteAuthor(id);
        observable.subscribe(function (data) {
            console.log("returned from delete service");
            if (data['message'] == "Success") {
                console.log("success in componennt delete");
                _this.getAuthorsFromService();
            }
            else {
                console.log("Error reported to component in delete call");
            }
        });
    };
    DashboardComponent.prototype.getAuthorsFromService = function () {
        var _this = this;
        console.log("called getAuthorsFromService");
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            console.log("Got authors in component: ", data);
            if (data['message'] == "Success") {
                console.log("success in componennt get authors");
                _this.authors = data['data'];
                console.log("authors: ", _this.authors);
                _this.authorDataAvailable = true;
            }
            else {
                console.log("Error reported to component");
            }
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a>\n\n<div *ngIf=\"authorDataAvailable\" id=\"{{author['data'][0]['_id']}}\">\n    <form  (submit)=\"onSubmit($event)\">\n        <!-- use the json pipe to see how newTask changes in real time -->\n        <p> {{ author | json }} </p>\n        <input type=\"text\" name=\"author['data'][0]['name']\" [(ngModel)]=\"author['data'][0]['name']\" />\n        <p *ngIf=\"errorsPresent\">{{ errorMessage }} </p>\n        <button [routerLink]=\"['/dashboard']\">Cancel</button>\n        <input type=\"submit\" value=\"Submit\" />\n    </form>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.authorDataAvailable = false;
        this.errorsPresent = false;
        this.errorMessage = "";
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the data to display in edit form
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log("in ngONInit in Edit Component, id: ", _this.id);
            _this.authorDataAvailable = false;
            var observable = _this._httpService.getAuthorById(_this.id);
            observable.subscribe(function (data) {
                console.log("data from service: ", data);
                _this.author = data;
                _this.authorDataAvailable = true;
            });
        });
    };
    EditComponent.prototype.onSubmit = function (e) {
        var _this = this;
        console.log("this method does the update, event: ", e);
        console.log("Task Id: ", e['target']['parentElement']['id']);
        console.log("in onSubmit: author: ", this.author);
        this.errorsPresent = false;
        var id = this.author['data'][0]['_id'];
        console.log("author id the easy way: ", id);
        var authorToUpdate = this.author['data'][0];
        console.log("sending to service: authorToUpdate: ", authorToUpdate);
        var observerable = this._httpService.updateAuthorById(authorToUpdate);
        observerable.subscribe(function (data) {
            console.log("Status from update Task: ", data['message']);
            if (data['message'] == "Error") {
                console.log("data - look at to find error: ", data);
                console.log("error message: ", data['error']['errors']['name']['message']);
                _this.errorMessage = data['error']['errors']['name']['message'];
                _this.errorsPresent = true;
                console.log("errorMessage: ", _this.errorMessage);
                console.log("errorsPresent: ", _this.errorsPresent);
            }
            else {
                console.log("rerouting on purpose");
                _this.errorsPresent = false;
                _this.authorDataAvailable = false;
                _this._router.navigate(['/dashboard']);
            }
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/authors');
    };
    HttpService.prototype.deleteAuthor = function (id) {
        return this._http.delete('/author/' + id);
    };
    HttpService.prototype.addAuthor = function (author) {
        console.log("in service, author: ", author);
        return this._http.post('/author/', author);
    };
    HttpService.prototype.addQuote = function (quote, authorId) {
        console.log("*************** in service, quote: ", quote);
        console.log("*************** in service, authorId: ", authorId);
        var quoteAuthorId = {
            quote: quote,
            authorId: authorId
        };
        console.log("*************** in service, quoteAuthorId: ", quoteAuthorId);
        return this._http.post('/createquote/', quoteAuthorId);
    };
    HttpService.prototype.getAuthorById = function (id) {
        console.log("in service getAuthorById, id: ", id);
        return this._http.get('/author/' + id);
    };
    HttpService.prototype.getQuoteById = function (id) {
        console.log("in service getQuoteById, id: ", id);
        return this._http.get('/quote/' + id);
    };
    HttpService.prototype.updateAuthorById = function (author) {
        console.log("in service updateAuthorById, author: ", author);
        var url_string = '/author/' + author._id;
        console.log("url_string: ", url_string);
        return this._http.put(url_string, author);
    };
    HttpService.prototype.updateQuoteById = function (quote) {
        console.log("in service updateQuoteById, quote: ", quote);
        var url_string = '/quote/' + quote._id;
        console.log("url_string: ", url_string);
        return this._http.put(url_string, quote);
    };
    HttpService.prototype.deleteQuoteByID = function (quoteId) {
        console.log("in service deleteQuoteById, quoteid", quoteId);
        var url_string = '/quote/' + quoteId;
        console.log("url_string: ", url_string);
        return this._http.delete(url_string);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/quoteadd/quoteadd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quoteadd/quoteadd.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/dashboard']\">Home</a>\n\n<p>Add a quote by {{ author['name'] }}</p>\n\n<form (submit)=\"onSubmit()\">\n    <!-- use the json pipe to see how newTask changes in real time -->\n    <p> {{ quote | json }} </p>\n    <input type=\"text\" name=\"quote.content\" [(ngModel)]=\"quote.content\" />\n    <p *ngIf=\"errorsPresent\">{{ errorMessage }}</p>\n    <input type=\"submit\" value=\"Add Quote\" />\n</form>\n\n"

/***/ }),

/***/ "./src/app/quoteadd/quoteadd.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var QuoteaddComponent = /** @class */ (function () {
    function QuoteaddComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.errorsPresent = false;
        this.errorMessage = "";
        this.author = {
            'name': "",
            'quotes': []
        };
        this.authorDataAvailable = false;
    }
    QuoteaddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quote = { content: "" };
        this.errorMessage = "";
        this._route.params.subscribe(function (params) {
            _this.authorId = params['author_id'];
            console.log("in noONInit 1: ", _this.authorId);
            var observable = _this._httpService.getAuthorById(_this.authorId);
            observable.subscribe(function (data) {
                console.log("data from get author call: ", data);
                if (data['message'] == "Error") {
                    console.log("error getting author");
                }
                else {
                    console.log(data['data'][0]['name']);
                    _this.author['name'] = data['data'][0]['name'];
                    _this.authorDataAvailable = true;
                }
            });
        });
    };
    QuoteaddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("onSubmit: ", this.quote);
        console.log("onSubmit: author stuff: ", this.authorId, this.author);
        var observable = this._httpService.addQuote(this.quote, this.authorId);
        observable.subscribe(function (data) {
            console.log("from add: 1", data);
            if (data['message'] == "Error") {
                _this.errorsPresent = true;
                console.log("data['error']: ", data['error']);
                console.log("data['error']['errors']['name']['message']: ", data['error']['errors']['name']['message']);
                _this.errorMessage = data['error']['errors']['name']['message'];
            }
            else {
                _this.errorsPresent = false;
                _this.errorMessage = "";
            }
        });
        this.quote = { name: "" };
        this._router.navigate(['/dashboard']);
    };
    QuoteaddComponent = __decorate([
        core_1.Component({
            selector: 'app-quoteadd',
            template: __webpack_require__("./src/app/quoteadd/quoteadd.component.html"),
            styles: [__webpack_require__("./src/app/quoteadd/quoteadd.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute,
            router_1.Router])
    ], QuoteaddComponent);
    return QuoteaddComponent;
}());
exports.QuoteaddComponent = QuoteaddComponent;


/***/ }),

/***/ "./src/app/quoteranks/quoteranks.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quoteranks/quoteranks.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Home</a>\n<a [routerLink]=\"['/quoteadd/',authorId]\">Add a Quote</a>\n\n<div *ngIf=\"authorDataAvailable\">\n    <p>Quotes by: {{ author['name'] }}</p>\n    <div *ngIf=\"quoteDataAvailable\">\n        <table>\n            <thead>\n                <tr>\n                    <th>Quote</th>\n                    <th>Votes</th>\n                    <th>Actions available</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let quote of quotes \">\n                    <td>{{ quote.content }}</td>\n                    <td>{{ quote.votes }}</td>\n                    <td><button (click)=\"upVote(quote._id, authorId)\">Vote Up</button>\n                        <button (click)=\"downVote(quote._id, authorId)\">Vote Down</button>\n                        <button (click)=\"deleteQuote(quote._id)\">Delete</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/quoteranks/quoteranks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var QuoteranksComponent = /** @class */ (function () {
    function QuoteranksComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.quoteDataAvailable = false;
        this.quotes = [];
        this.quotesUnsorted = [];
        this.authorDataAvailable = false;
        this.author = {
            'name': "",
            'quotes': []
        };
        this.errorsPresent = false;
        this.errorMessage = "";
        this.newArr = [];
    }
    QuoteranksComponent.prototype.ngOnInit = function () {
        console.log("in quote ranks ngOnInit");
        this.getAuthorQuoteData();
    };
    QuoteranksComponent.prototype.upVote = function (quoteId, authorId) {
        var _this = this;
        console.log("in upVote Here, quoteId: ", quoteId);
        this.quoteId = quoteId;
        var observable = this._httpService.getQuoteById(this.quoteId);
        observable.subscribe(function (data) {
            if (data['message'] == "Error") {
                console.log("error getting quote");
            }
            else {
                var local_quote = data['data'][0];
                console.log("votes for this quote: ", local_quote['votes']);
                local_quote['votes'] = local_quote['votes'] + 1;
                var observerable = _this._httpService.updateQuoteById(local_quote);
                observerable.subscribe(function (data) {
                    if (data['message'] == "Error") {
                        console.log("error updating quote");
                    }
                    else {
                        console.log("success updating quote");
                        _this.getAuthorQuoteData();
                    }
                });
            }
        });
    };
    QuoteranksComponent.prototype.downVote = function (quoteId, authorId) {
        var _this = this;
        console.log("in upVote Here, quoteId: ", quoteId);
        this.quoteId = quoteId;
        var observable = this._httpService.getQuoteById(this.quoteId);
        observable.subscribe(function (data) {
            if (data['message'] == "Error") {
                console.log("error getting quote");
            }
            else {
                var local_quote = data['data'][0];
                console.log("votes for this quote: ", local_quote['votes']);
                local_quote['votes'] = local_quote['votes'] - 1;
                var observerable = _this._httpService.updateQuoteById(local_quote);
                observerable.subscribe(function (data) {
                    if (data['message'] == "Error") {
                        console.log("error updating quote");
                    }
                    else {
                        console.log("success updating quote");
                        _this.getAuthorQuoteData();
                    }
                });
            }
        });
    };
    QuoteranksComponent.prototype.deleteQuote = function (quoteId) {
        var _this = this;
        console.log("In deleteQuote, quoteID: ", quoteId);
        this.quoteId = quoteId;
        var observable = this._httpService.deleteQuoteByID(this.quoteId);
        observable.subscribe(function (data) {
            if (data['message'] == "Error") {
                console.log("error deleting quote");
            }
            else {
                console.log("success deleting quote");
                _this.getAuthorQuoteData();
            }
        });
    };
    QuoteranksComponent.prototype.getAuthorQuoteData = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.authorId = params['author_id'];
            console.log("in noONInit 1: ", _this.authorId);
            var observable = _this._httpService.getAuthorById(_this.authorId);
            observable.subscribe(function (data) {
                console.log("data from get author call 5: ", data['data'][0]['quotes'][0]['content']);
                if (data['message'] == "Error") {
                    console.log("error getting author");
                }
                else {
                    console.log(data['data'][0]['name']);
                    _this.author['name'] = data['data'][0]['name'];
                    _this.authorDataAvailable = true;
                    _this.quotes = data['data'][0]['quotes'];
                    _this.quotes.sort(function (a, b) {
                        return b['votes'] - a['votes'];
                    });
                    _this.quoteDataAvailable = true;
                }
            });
        });
    };
    QuoteranksComponent = __decorate([
        core_1.Component({
            selector: 'app-quoteranks',
            template: __webpack_require__("./src/app/quoteranks/quoteranks.component.html"),
            styles: [__webpack_require__("./src/app/quoteranks/quoteranks.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.ActivatedRoute, router_1.Router])
    ], QuoteranksComponent);
    return QuoteranksComponent;
}());
exports.QuoteranksComponent = QuoteranksComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map