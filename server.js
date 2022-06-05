
const express = require('express');

const app = express();
//
// app.use(express.static('dist'));
//
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/dist/index.html')
//    })

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
   })


let server = app.listen(8088, function(){
    console.log("App server is running on port 8888");
   });


