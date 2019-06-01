const mongoose = require('mongoose');

// var fs = require('fs');
const dbinfo = require('./dbinfo.js');

const uri = `mongodb+srv://${dbinfo.username}:${dbinfo.pw}@cluster0-kn8tl.mongodb.net/test?retryWrites=true`;

mongoose.connect(uri,{ useNewUrlParser: true });



let reviewSchema = mongoose.Schema({
  uuid: Number,
  review: Array
});

let Review = mongoose.model('Review', reviewSchema);

// //pull all reviews from db
// let findAll = (object, callback) => {
//   Review.find(object, function(err, data) {
//     if (err) {
//       console.log(err);
//     }
//     callback(null, data);
//   });
// }

//Pull one review from db
let findOne = (object, callback) => {
  Review.findOne(object, function(err, data) {
    if (err) {
      console.log(err);
    } 
    callback(null, data);
  });
}


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://blrusnell:<password>@cluster0-kn8tl.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




module.exports.findOne = findOne;
// module.exports.findAll = findAll;



////////********* */DATABASE SEEDING! DONT TOUCH UNLESS NEED TO RESEED*******//////
// const seed = () => { fs.readFile('./olddata.json', (err, data) => {
//   //console.log(JSON.parse(data[0]), 'yo');
//   let parsedata = JSON.parse(data);
//   parsedata.map(e => {
   
//   const newRestaurant = new Review(e)
//   newRestaurant.save()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     //console.log(error);
//   })
// })
// })
// }

// seed()




//'mongodb://localhost/fecreviews'