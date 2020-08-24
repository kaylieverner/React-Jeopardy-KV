const express = require("express");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3333;
const db = require("./models");
var session = require('express-session');
var path = require('path');
var passport = require('passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("client/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);



//Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// require("./routes/htmlRoutes.js");
require("./routes/api-routes.js")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);



db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
