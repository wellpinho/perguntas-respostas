const express = require('express')
const router = express.Router()

const PerguntaController = require('./../controllers/PerguntaController')

router.get('/perguntas', PerguntaController.index)
router.post('/perguntas', PerguntaController.store)

module.exports = router