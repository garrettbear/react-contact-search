var express = require('express');
var app = express();
// Cors is now enabled in this app. Allowing access to server resources over cors
var cors = require('cors');
var contacts = require('./resources/contact_data');

app.use(cors());
app.set('port', 5000);

app.get('/api/contacts', function(req, res) {
  res.send(contacts);
});

app.listen(app.get('port'));
