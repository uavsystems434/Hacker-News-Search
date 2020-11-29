const express = require('express');
const path = require('path');
const app = express();

app.set( 'port', ( process.env.PORT || 8080 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });