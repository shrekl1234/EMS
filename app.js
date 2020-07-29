const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const ejs = require("ejs");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "EMS"
});

con.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});


var ems_t1 = [];
con.query("SELECT * FROM EMS_T1 WHERE id<=10", function(err, result, fields) {
  if (err) {
    console.log(err);
  } else {
    ems_t1 = result;
  }
});
var ems_t2 = [];
con.query("SELECT * FROM EMS_T2 WHERE id<=10", function(err, result, fields) {
  if (err) {
    console.log(err);
  } else {
    ems_t2 = result;
  }
});
app.get("http://localhost:3000/getData", function(req,res){
  const x = "xyz";
  res.sendFile("text.txt");
});

app.route("/")
  .get(function(req, res) {
    res.render("home", {
      ems_t1: ems_t1,
      ems_t2: ems_t2
    });
  });

app.listen(3000, function(req, res) {
  console.log("Server Started at port 3000!");
});
