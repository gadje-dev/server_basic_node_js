const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
  const q = req.query
  console.log(q);
})

app.get('/user/:id/:fun', function (req, res) {
	const q = req.query
	console.log(q);
  })
app.listen(3000)

// http://localhost:3000/user/school?group=korea&key[name]=choi&key[age]=20
