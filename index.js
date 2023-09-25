const express = require('express')
const app = express()

// use html view files
const path = require('path')
app.use(express.static(path.join(dirname, 'views')));

app.get('/', (req, res) => {
  res.send(path.join(dirname, 'views', 'index.html'))
})

app.listen(3000, () => {
  console.log('Example app is started at http://localhost:3000')
})

