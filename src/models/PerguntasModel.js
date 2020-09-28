const Sequelize = require('sequelize')
const db = require('./../utils/database')

const Pergunta = db.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Pergunta