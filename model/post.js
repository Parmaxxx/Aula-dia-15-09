const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type:db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.INTEGER
    }
})

module.exports = Agendamentos

//Agendamentos.sync({force:true})