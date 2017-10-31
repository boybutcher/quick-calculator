const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('testing');
})

app.listen(3000, function () {
  console.log('calculator server listening on port 3000!')
})