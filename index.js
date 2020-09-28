const express = require('express')
const bodyParser = require('body-parser')
const database = require('./src/utils/database')
const cors = require('cors')
const app = express()

const PerguntasRouter = require('./src/routes/PerguntaRoutes')
const { json } = require('body-parser')

database.authenticate().then(() => {
  console.log('Conetado com sucesso!')
}).catch( error => {
  console.log('Erro ao conectar no banco de dados')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).render('index')
})

app.get('/perguntas', (req, res) => {
  res.status(200).render('perguntas')
})

app.use(PerguntasRouter)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Running on port http://localhost:${port}`)
})