const express = require('express')
const router = express.Router();

const Note = require('../models/noteModel')

router.route('/create').post((req,res) => {
    const title= req.body.title;
    const content = req.body.content;
    const time = req.body.time;

    const newNote = new Note({
        title, 
        content,
        time
    })

    newNote.save();
})

router.route('/notes').get((req,res) => {
    Note.find()
        .then(foundNotes => res.json(foundNotes)).then(console.log("notes trig"))
})

router.route('/delete').post((req,res) => {
    const fetchedTitle = req.body.title;
    Note.deleteOne({title: fetchedTitle})
})

module.exports = router;
