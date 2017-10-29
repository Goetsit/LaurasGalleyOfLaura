var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// Serve up static files
app.use(express.static('public'));

app.listen(port, function(){
    console.log('listening on port', port);
  });
