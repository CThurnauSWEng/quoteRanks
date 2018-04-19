const express = require('express');

const app = express();
app.use(express.static(__dirname + '/AngularApp/dist'));

// Require path
const path = require('path');
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());

// Require Mongoose
var mongoose = require('mongoose');
// connect to mongodb using mongoose 
mongoose.connect('mongodb://localhost/quoteRanks5');

// create schema
var Schema = mongoose.Schema;

var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}],
}, {timestamps: true})
mongoose.model("Author",AuthorSchema);
var Author = mongoose.model("Author");

var QuoteSchema = new mongoose.Schema({
    _author: {type: Schema.Types.ObjectId, ref: 'Author'},
    content: {type: String, required: true, minlength: 4},
    votes: {type: Number}
}, {timestamps: true})
mongoose.model('Quote',QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function (req, res){
    console.log('got hit');
    res.render('index');
});

app.get('/authors/', function(req,res){
    Author.find({}, function(err, authors) {
        if (err){
            console.log("error retrieving authors");
            res.json({message: "Error", error: err})
        } else {
            // console.log("in server, authors: ", authors)
            res.json({message: "Success", data: authors})
        }
    })
})

app.get('/author/:id', function(req, res){
    Author.find({_id: req.params.id})
    .populate('quotes')
    .exec(function (err, author){
        if (err){
            console.log("error retrieving author");
            res.json({message: "Error", error: err})
        } else {
            res.json({message: "Success", data: author})
        }
    })
})

app.get('/quote/:id', function(req, res){
    Quote.find({_id: req.params.id}, function(err, quote){
        if (err) {
            console.log("error retrieving quote");
            res.json({message: "Error", error: err})
        } else {
            res.json({message: "Success", data: quote})
        }
    })
})

app.delete('/author/:id', function(req,res){
    Author.findByIdAndRemove(req.params.id, function(err, author) {
        if (err){
            console.log("error deleting author");
            res.json({message: "Error", error: err})
        } else {
            console.log("in server, author: ", author)
            res.json({message: "Success", data: author})
        }        
    })
})

app.post('/author/', function(req,res){
    var author = new Author({"name": req.body.name});
    author.save(function(err){
        if (err){
            console.log("error creating the author");
            res.json({message: "Error", error: err})
        } else {
            res.json({message: "Success", data: author})
        }        
    })
})

app.post('/createquote/', function(req, res){
    console.log("%%%%%%%% in server quote post, content: ", req.body.quote.content);
    console.log("%%%%%%%% in server quote post, AuthorId: ", req.body.authorId);
    var quote = new Quote({"content": req.body.quote.content,"votes":0});
    var authorId = req.body.authorId;
    Author.findOne({_id: authorId}, function(err, author){
        console.log("$$$author: ", author);
        quote._author = author._id;
        quote.save(function(err){
            author.quotes.push(quote);
            author.save(function(err){
                if (err){
                    console.log("error saving author with quote");
                    res.json({message: "Error", error: err});
                } else {
                    console.log("$$$ saved author: ", author);
                    res.json({message: "Success", author: author, quote: quote});
                }
            })
        })
    })
})

app.put('/author/:id', function(req,res){
    console.log("in update route")
    Author.update({_id: req.params.id}, {name: req.body.name},{runValidators: true}, function (err){
        if (err){
            res.json({message: "Error", error: err})
        } else {
            res.json({message: "Success - Author Updated"})
        }
    });    
})

app.put('/quote/:id', function(req,res){
    console.log("in quote update route")
    Quote.update({_id: req.params.id}, {content: req.body.content,votes: req.body.votes},{runValidators: true}, function (err){
        if (err){
            res.json({message: "Error", error: err})
        } else {
            res.json({message: "Success - Quote Updated"})
        }
    });    
})

app.delete('/quote/:id', function(req,res){
    console.log("in delete id: ", req.params.id);
    Quote.findByIdAndRemove(req.params.id, function(err, quote) {
        if (err){
            console.log("error deleting quote");
            res.json({message: "Error", error: err})
        } else {
            console.log("in server, author: ", quote)
            res.json({message: "Success", data: quote})
        }        
    })
})

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./AngularApp/dist/index.html"))
});

app.listen(8000, function() {
    console.log("Hello Angular listening on port 8000")
})
