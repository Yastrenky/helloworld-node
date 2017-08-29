const express = require('express');
const app = express();
app.get('/', function(req, res) {
  console.log("hello " + new Date);
  res.end("hello world")
});
app.listen(1337);
console.log("server listening on port 1337");
