const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({}))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).render('index')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Running on port http://localhost:${port}`)
})