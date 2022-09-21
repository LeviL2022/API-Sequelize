'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Pessoas', [
    {
      nome:'Levi Lucas',
      ativo: true,
      email:'levi@levi.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nome:'João Maria',
      ativo: true,
      email:'j@j.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nome:'Renato Dantas',
      ativo: true,
      email:'r@ren.com',
      role:'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome:'Luiz Carlos',
      ativo: false,
      email:'lc@lc.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome:'Ester Santos',
      ativo: true,
      email:'es@es.com',
      role:'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Pessoas', null, {});
  
  }
};
