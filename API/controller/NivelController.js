const database = require('../models');

class NivelController
{
    static async getAllLevels(req, res)
    {
        try
        {
            const allLevels = await database.Niveis.findAll()
            return res.status(200).json(allLevels)

        }catch(error)
        {

            res.status(500).json(error.message)
        }
    }

    static async getOneLevel(req, res)
    {
        const {id} = req.params
        try
        {
            const oneLevel = await database.Niveis.findOne({where:{id: Number (id) }})
            return res.status(200).json(oneLevel)

        }catch(error)
        {

            return res.status(500).json(error.message)
        }
    }

    static async createLevel(req, res)
    {   
        const newLevel = req.body
        try
        {   
            const newLevelCreated = await database.Niveis.create(newLevel)
            return res.status(200).json(newLevelCreated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async updateLevel(req, res)
    {
        const {id} = req.params
        const infos = req.body

        try
        {
            await database.Niveis.update(infos,{where:{id: Number (id) }})
            const levelUpdated = await database.Niveis.findOne({where:{id:Number(id)}})
            return res.status(200).json(levelUpdated)

        }catch(error)
        {
            return res.status(500).send(error.message)
        }
    }

    static async excludeLevel(req, res)
    {
        const {id} = req.params

        try
        {
            await database.Niveis.destroy({where:{id:Number(id)}})
            return res.status(200).json({mensagem:`id ${id} excluido`})

        }catch(error)
        {   
            res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController;