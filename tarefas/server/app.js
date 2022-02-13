const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

    // Cors
        app.use(cors())

    // Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/tarefas').then(() => {
            console.log('Conectado ao mongo')
        }).catch(err => {
            console.log('Erro ao se conectar: ' + err)
        })

// Rotas
    app.get('/', (req, res) => {
        // Enviar os dados do banco de dados
    })