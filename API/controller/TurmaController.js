const database = require('../models');

class TurmaController
{
    static async getAllClasses(req, res)
    {
        try
        {
            const allClasses = await database.Turmas.findAll()
            return res.status(200).json(allClasses)

        }catch(error)
        {

            res.status(500).json(error.message)
        }
    }

    static async getOneClass(req, res)
    {
        const {id} = req.params
        try
        {
            const oneClass = await database.Turmas.findOne({where:{id: Number (id) }})
            return res.status(200).json(oneClass)

        }catch(error)
        {

            return res.status(500).json(error.message)
        }
    }

    static async createClass(req, res)
    {   
        const newClass = req.body
        try
        {   
            const newClassCreated = await database.Turmas.create(newClass)
            return res.status(200).json(newClassCreated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async updateClass(req, res)
    {
        const {id} = req.params
        const infos = req.body

        try
        {
            await database.Turmas.update(infos,{where:{id: Number (id) }})
            const classUpdadted = await database.Turmas.findOne({where:{id:Number(id)}})
            return res.status(200).json(classUpdadted)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async excludeClass(req, res)
    {
        const {id} = req.params

        try
        {
            await database.Turmas.destroy({where:{id:Number(id)}})
            return res.status(200).json({mensagem:`id ${id} excluido`})

        }catch(error)
        {   
            res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController;