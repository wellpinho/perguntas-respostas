const Pergunta = require('./../models/PerguntasModel')

exports.index = async (req, res) => {
  await Pergunta.findAll({ order: [['id', 'DESC']]})
    .then( list => {
      if (list === null) {
        res.status(201).redirect('/')
      }else {
        res.status(200).render('perguntas', { list: list})
      }
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

