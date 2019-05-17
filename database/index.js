const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fecreviews');


let reviewSchema = mongoose.Schema({
  uuid: Number,
  reviews: Array
});

let Review = mongoose.model('Review', reviewSchema);

let save = (err, reviews) => {
    Review.insertMany(review, function(err) {
      if (err) {
      console.log(err)
      }
    });
  }

  let findAll = (object, callback) => {
    Review.find(object, function(err, data) {
      if (err) {
        console.log(err);
      }
      callback(null, data);
    });
  }




module.exports.save = save;
module.exports.findAll = findAll;