const mongoose = require ("mongoose");
var mongoURL = 'mongodb+srv://gfdsbap:Hamilton44@cluster0.anvl8.mongodb.net/graphite'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true}) //connection to mongo db

var db = mongoose.connection

db.on('connected', ()=> {
    console.log('Mongo DB connected successfully'); //success message
})

db.on('error', ()=> {
    console.log('Mongo DB connection failed'); //error message
})

module.exports=mongoose