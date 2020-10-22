var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);


// 1) setup server
app.listen(3000, function(){
    console.log('Running on port 3000')
});

// 2) setup directory used to serve static files

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public')); 

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// 3) setup data store

// init the data store
db.defaults({ posts: []}).write();

// list posts
app.get('/data', function(req, res){     
    res.send(db.get('posts').value());//ver docu of lowdb
});


// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:id/:name/:email/:balance/:password/:transactions/:published', function(req, res){ //escribe en la DB
    var post = {
        "id"    : req.params.id,
        "name" : req.params.name.value,
        "email"    : req.params.email.value,
        "balance"    : req.params.balance.value,
        "password" : req.params.password.value,
        "transactions"    : req.params.transactions.value,
        "published" : req.params.published
    }
    console.log(post);
    console.log("GET POSTSSS");
    db.get('posts').push(post).write();
    console.log(db.get('posts').value()); //return to the client info in the DB
    res.send(db.get('posts').value());
});

/*
db.get('posts')
 .push({ id : '55', name: 'Ga', email : 'as@i.com', password: 'mmd'})
 .write()
*/

// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

console.log("arriba");
console.log("abajo");




app.get('/account/create/:name/:email/:password', function (req, res) {
    // YOUR CODE
    // Create account route
        var post = {
            "name" : req.params.name.value,
            "email"    : req.params.email.value,
            "password" : req.params.password.value,
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());
        console.log(req.params.name + req.params.email + req.params.password);
});

app.get('/account/login/:email/:password', function (req, res) {
    // YOUR CODE
    // Login user - confirm credentials
        var post = {
            "email"    : req.params.email.value,
            "password" : req.params.password.value,
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());
        console.log(req.params.email + req.params.password);
        // If success, return account object    
        // If fail, return null
});

app.get('/account/get/:email', function (req, res) {
    // YOUR CODE
    // Return account based on email
        var post = {
            "email"    : req.params.email.value,
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());    
        console.log(req.params.email);
});

app.get('/account/deposit/:email/:amount', function (req, res) {
    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
        var post = {
            "email"    : req.params.email.value,
            "amount"    : req.params.amount.value
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());
        console.log(req.params.email + req.params.amount);
});

app.get('/account/withdraw/:email/:amount', function (req, res) {
    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
        var post = {
            "email"    : req.params.email.value,
            "amount"    : req.params.amount.value
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());
        console.log(req.params.email);  
});

app.get('/account/transactions/:email', function (req, res) {
    // YOUR CODE
    // Return all transactions for account
        var post = {
            "email"    : req.params.email.value,
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());
        console.log(req.params.email);  
});

app.get('/account/all', function (req, res) {
    // YOUR CODE
    // Return data for all accounts
        var post = {
        "id"    : req.params.id,
        "name" : req.params.name.value,
        "email"    : req.params.email.value,
        "balance"    : req.params.balance.value,
        "password" : req.params.password.value,
        "transactions"    : req.params.transactions.value,
        "published" : req.params.published
        }
        console.log(post);
        db.get('posts').push(post).write();
        console.log(db.get('posts').value()); //return to the client info in the DB
        res.send(db.get('posts').value());
        console.log(req.params.email);  
});