const express = require('express');
const path = require('path');
var cors = require('cors')


const app = express();
const port = process.env.PORT || 9000;

app.use(cors())

app.use(express.static(path.join(__dirname,'css')))
app.use(express.static(path.join(__dirname,'search')))
app.use(express.static(path.join(__dirname,'search_box')))
app.use(express.static(path.join(__dirname,'search_facet')))
app.use(express.static(path.join(__dirname,'search_results')))
console.log("dirname " + __dirname)
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);