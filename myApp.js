let express = require('express');
let app = express();
// require('dotenv').config();

// console.log('Hello World');

// app.get("/", function(req, res) {
  // res.send("Hello Express");

  // res.sendFile(__dirname + "/views/index.html");

  // res.json({
  //   message: "Hello json"
  // });
// });

// app.use("/public", express.static(__dirname + "/public"));


/** Use the .env File */
// app.get("/json", (req, res) => {
//   if(process.env['MESSAGE_STYLE'] === 'uppercase') {
//     res.json({message: "HELLO JSON"});
//   } else {
//     res.json({message: "Hello json"});
//   }
// });


/** Implement a Root-Level Request Logger Middleware */
// app.use(function middleware(req, res, next) {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });


/** Chain Middleware to Create a Time Server */
// app.get("/now", function(req, res, next) {
//   req.time = new Date().toString();
//   next();
// }, function(req, res) {
//   res.json({time: req.time});
// });


/** Get Route Parameter Input from the Client */
// app.get("/:word/echo", (req, res) => {
//   res.json({echo: req.params.word});
// })


/** Get Query Parameter Input from the Client */
// app.get("/name", (req, res) => {
//   var firstname = req.query.first;
//   var lastname = req.query.last;
//   res.json({ name: "${firstname} &{lastname}" });
// });


/** Use body-parser to Parse POST Requests */
// let bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: false}));


/** Get Data from POST Requests */
// let bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: false}));

// app.post("/name", (req, res) => {
//   res.json({name: (req.body.first + " " + req.body.last)});
// });




























module.exports = app;
