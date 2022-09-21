const { Router } = require('express')
const NivelController = require('../controller/NivelController.js')

const router = Router()

router
    .get('/niveis', NivelController.getAllLevels)
    .get('/niveis/:id', NivelController.getOneLevel)
    .post('/niveis', NivelController.createLevel)
    .put('/niveis/:id', NivelController.updateLevel)
    .delete('/niveis/:id', NivelController.excludeLevel)

module.exports = router