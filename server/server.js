const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();




//***Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static(__dirname + '/../client/dist'));

  
//get one review
app.get('/reviews', function (req, res) {
    db.findOne(req.body, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        console.log(data);
        res.send(data);  
    })
});


let port = 3004;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});