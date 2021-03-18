const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://khushi:khushi@cluster0.vntep.mongodb.net/notesDB?retryWrites=true&w=majority', ({ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify:false }));
//mongoose.connect('mongodb://localhost:27017/notesDB', ({ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify:false }));
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
console.log("connection succeeded");

app.use('/', require('./routes/noteRoute'))

/*app.get("/", function(req,res){
    res.send("express here");
})*/

//app.use("/todo/", require("./routes/todoRoute"))

app.listen(3001,function(){
    console.log("server running on port 3001");
})