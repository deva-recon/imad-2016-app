var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/contactus', function(req, res) {
    res.sendFile(path.join(__dirname,'ui', 'contactus.html'));
});

app.get('/contactus', function(req, res) {
    res.send("justice will be served");
});

app.get('/article', function(req, res) {
    res.sendFile(path.join(__dirname,'ui', 'article.html'));
});

app.get('/gallery', function(req, res) {
    res.sendFile(path.join(__dirname,'ui', 'gallery.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/aboutus2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aboutus2.html'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
