const mongoose = require('mongoose');

const notesSchema = {
    title: String,
    content: String,
    time: String
}

const Note = mongoose.model("Note", notesSchema);

module.exports = Note;