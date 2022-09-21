const database = require('../models');

class PessoaController
{
    static async getAllPersons(req, res)
    {
        try
        {
            const allPersons = await database.Pessoas.findAll()
            return res.status(200).json(allPersons)

        }catch(error)
        {

            res.status(500).json(error.message)
        }
    }

    static async getOnePerson(req, res)
    {
        const {id} = req.params
        try
        {
            const onePerson = await database.Pessoas.findOne({where:{id: Number (id) }})
            return res.status(200).json(onePerson)

        }catch(error)
        {

            return res.status(500).json(error.message)
        }
    }

    static async createPerson(req, res)
    {   
        const newPerson = req.body
        try
        {   
            const newPersonCreated = await database.Pessoas.create(newPerson)
            return res.status(200).json(newPersonCreated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async updatePerson(req, res)
    {
        const {id} = req.params
        const infos = req.body

        try
        {
            await database.Pessoas.update(infos,{where:{id: Number (id) }})
            const personUpdated = await database.Pessoas.findOne({where:{id:Number(id)}})
            return res.status(200).json(personUpdated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async excludePerson(req, res)
    {
        const {id} = req.params

        try
        {
            await database.Pessoas.destroy({where:{id:Number(id)}})
            return res.status(200).json({mensagem:`id ${id} excluido`})

        }catch(error)
        {   
            res.status(500).json(error.message)
        }
    }

    static async getOneRegistration(req, res)
    {
        const {studentId,registrationId} = req.params
        try
        {
            const oneRegistration = await database.Matriculas.findOne({where:
                {id: Number (registrationId),
                estudante_id : Number(studentId)
                }})
            return res.status(200).json(oneRegistration)

        }catch(error)
        {

            return res.status(500).json(error.message)
        }
    }

    static async createRegistration(req, res)
    {   
        const {studentId} = req.params
        const newRegistration = {...req.body, estudante_id: Number(studentId)}

        try
        {   
            const newRegistrationCreated = await database.Matriculas.create(newRegistration)
            return res.status(200).json(newRegistrationCreated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async updateRegistration(req, res)
    {
        const {studentId,registrationId} = req.params
        const infos = req.body

        try
        {
            await database.Matriculas.update(infos,{where:
                {id: Number (registrationId),
                estudante_id : Number(studentId)
                }})
            const registrationUpdated = await database.Matriculas.findOne({where:
                {id:Number(registrationId)}})
            return res.status(200).json(registrationUpdated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async excludeRegistration(req, res)
    {
        const {studentId,registrationId} = req.params

        try
        {
            await database.Matriculas.destroy({where:{id:Number(registrationId)}})
            return res.status(200).json({mensagem:`id ${registrationId} excluido`})

        }catch(error)
        {   
            res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController;