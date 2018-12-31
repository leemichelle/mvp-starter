let express = require('express');
let items = require('../database-mongo/index.js');

let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/test', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

