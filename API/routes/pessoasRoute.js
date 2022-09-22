const {Router} = require('express');
const PessoaController = require('../controller/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.getActivePersons)
    .get('/pessoas/todos', PessoaController.getAllPersons)
    .get('/pessoas/:id', PessoaController.getOnePerson)
    .post('/pessoas', PessoaController.createPerson)
    .put('/pessoas/:id', PessoaController.updatePerson)
    .delete('/pessoas/:id', PessoaController.excludePerson)

    .get('/pessoas/:studentId/matricula/:registrationId', PessoaController.getOneRegistration)
    .get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.getRegistrationByClass)
    .get('/pessoas/:estudanteId/matricula', PessoaController.getRegistration)
    .post('/pessoas/:id/restaura', PessoaController.restorePerson)
    .post('/pessoas/:studentId/matricula', PessoaController.createRegistration)
    .put('/pessoas/:studentId/matricula/:registrationId', PessoaController.updateRegistration)
    .delete('/pessoas/:studentId/matricula/:registrationId', PessoaController.excludeRegistration)

module.exports = router;