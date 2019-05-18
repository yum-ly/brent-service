const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fecreviews',{ useNewUrlParser: true });
var fs = require('fs');


let reviewSchema = mongoose.Schema({
  uuid: Number,
  review: Array
});

let Review = mongoose.model('Review', reviewSchema);


let findAll = (object, callback) => {
  Review.find(object, function(err, data) {
    if (err) {
      console.log(err);
    }
    callback(null, data);
  });
}

let findOne = (object, callback) => {
  Review.findOne(object, function(err, data) {
    if (err) {
      console.log(err);
    } 
    callback(null, data);
  });
}




module.exports.findOne = findOne;
module.exports.findAll = findAll;



//////////********* */DATABASE SEEDING! DONT TOUCH UNLESS NEED TO RESEED*******//////
// const seed = () => { fs.readFile('./data.json', (err, data) => {
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