var express = require('express'); // get express module
var app = express(); // start express and get it in app variable
var common = require('./public/common');
var bodyParser = require('body-parser');
var ejs = require('ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req,res){
    res.render('pages/index');
})
// If Else
app.post('/ifelse', testifelseServer);


// server specific code for if else test
function testifelseServer(req, res) {
    var age = req.body.input.age; // req.body.age create a json
    var returned = common.testifelse({
        "age": age
    }); //
    res.send(returned);
}


// Server Side - testing for username & password

app.post('/ifelseusername', testifelseusernameServer);


// server specific code for if else test
function testifelseusernameServer(req, res) {
    var username = req.body.input.username;
    var password = req.body.input.password; // req.body.age create a json
    var returned = common.testifelseusername({
        "username": username,
        "password": password
    }); //
    res.send(returned);
}



// Switch Case
app.post('/switchcase', testswitchcaseServer);


// server specific code 
function testswitchcaseServer(req, res) {
    var grade = req.body.input.grade; // req.body.age create a json
    var returned = common.testswitchcase({
        "grade": grade
    }); //
    res.send(returned);
}


// Do While

app.post('/dowhile', testdowhileServer);


// server specific code 
function testdowhileServer(req, res) {
    var count = req.body.input.count;
    var returned = common.testdowhile({
        "count": count
    }); //
    res.send(returned);
}

// For Loop

app.post('/forloop', testforloopServer);


// server specific code 
function testforloopServer(req, res) {
    var count = req.body.input.count;
    var returned = common.testforloop({
        "count": count
    }); //
    res.send(returned);
}

// For In Loop JSON

app.post('/forinloopjson', testforinloopjsonServer);


// server specific code 
function testforinloopjsonServer(req, res) {
    var txt = req.body.input;
    var returned = common.testforinloopjson(
        txt
    );
    res.send(returned);
}

// for in loop Array

app.post('/forinlooparr', testforinlooparrServer);


// server specific code 
function testforinlooparrServer(req, res) {
    var txt = req.body.input;
    var returned = common.testforinlooparr(
        txt
    );
    res.send(returned);
}

//For Loop Array
app.post('/forlooparr', testforlooparrServer);


// server specific code 
function testforlooparrServer(req, res) {
    var txt = req.body.input;
    var returned = common.testforinlooparr(
        txt
    );
    res.send(returned);
}

var server = app.listen(8080, function() {
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
