const express = require('express')
const app = express()
const PORT = 3000

// routes setting
app.get('/', (req, res) => {
  res.send('hello world')
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})