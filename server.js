let express = require('express');
let db = require('./models');
let app = express();

let PORT = process.env.PORT || 7500;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let exphbs = require('express-handlebars');

app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

let routes = require('./controllers/burgers_controller');

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });