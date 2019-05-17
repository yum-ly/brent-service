const express = require('express');
const bodyParser = require('body-parser');
const reviews = require('../database/index.js');
const app = express();




//***Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static(__dirname + '/../client/dist'));

  
// get all the reviews
app.get('/reviews', function (req, res) {
});


let port = 3004;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});