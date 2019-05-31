const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');
const app = express();

app.use(cors());


//***Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static(__dirname + '/../client/dist'));

  
//get one review
app.get('/http://ec2-3-19-61-244.us-east-2.compute.amazonaws.com', function (req, res) {
    console.log(req);
    let id = req.query.uuid;
    db.findOne({uuid: id}, (err, data) => {
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