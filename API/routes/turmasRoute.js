const { Router } = require('express')
const TurmaController = require('../controller/TurmaController.js')

const router = Router()

router
    .get('/turmas',TurmaController.getAllClasses)
    .get('/turmas/:id', TurmaController.getOneClass)
    .post('/turmas', TurmaController.createClass)
    .put('/turmas/:id', TurmaController.updateClass)
    .delete('/turmas/:id', TurmaController.excludeClass)

module.exports = router