const express = require('express')
const router = express.Router()

const PerguntaController = require('./../controllers/PerguntaController')

router.get('/pergunta', PerguntaController.index)
router.post('/pergunta', PerguntaController.store)

module.exports = router