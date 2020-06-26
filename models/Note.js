const mongoose = require('mongoose');

// Save a reference to the Schema constructor
//Destructured version
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new PersonSchema object
const NoteSchema = new Schema({
  note: {
    type: String,
    required: "You must include a note"
  }});

// This creates our model from the above schema, using Mongoose's model method
var Note = mongoose.model('Note', NoteSchema);

// Export the Note model
module.exports = Note;