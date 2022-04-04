const express = require('express')
const routes = require('./routes')
const exphbs = require('express-handlebars')

const app = express()
const PORT = 3000

// handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})
