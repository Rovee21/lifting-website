//importing mongoose
const mongoose = require('mongoose');

//defining the structure of the documents in the lifts collection
const LiftSchema = new mongoose.Schema({
    exercise: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
  });

//mongoose model named lift that will allow the use of CRUD operations
const Lift = mongoose.model('Lift', LiftSchema);

//so the model can be used in other parts of the program
module.exports = Lift;