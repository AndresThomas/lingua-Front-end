const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/lingua-zone'));

app.get('/*', function(req, res){
    res.sendFile(__dirname+'/dist/lingua-zone/index.html');
});

app.listen(process.env.PORT || 8080);