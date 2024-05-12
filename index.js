const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.send('Dog')
})

app.get('/cat', (req, res) => {
  res.send('Cat')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})