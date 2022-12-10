const sequelize = require('sequelize');
const conexao = new 
sequelize('aula2','root','',{
    host:'localhost',
    dialect:'mysql',
})
try{
    conexao.authenticate();
    console.log("Conectado ao Mysql!")
}catch(err){
console.log("Deu erro, err")
}
module.exports = conexao;