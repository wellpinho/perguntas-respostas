const Pergunta = require('./../models/PerguntasModel')

exports.index = async (req, res) => {
  const perguntas = await Pergunta.findAll()

  res.status(200).send({
    pergunta: perguntas
  })
}

exports.store = async (req, res) => {
  const { titulo, description } = req.body
  await Pergunta.create({ titulo, description }).then( list => {
      res.redirect('/')
    }).catch( err => {
      res.status(201).send(err)
    })
}

