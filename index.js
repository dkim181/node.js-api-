const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/sound/:name', (req, res) => {
  const{ name } = req.params

  if(name == "dog") {
    res.json({'sound': '멍멍' })
  } else if (name == "cat") {
    res.json({'sound': '야옹' })
  }

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})