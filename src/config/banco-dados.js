// Importar a biblioeca do mysql para se conectar ao banco de dados mysql
const mysql = require('mysql2/promise')

// Configuração da conexão com o banco de dados 
const conexao = mysql.createConnection({
    host: 'localhost', // Endereço do servidor 
    user: 'root', // Usuario do banco de dados
    password: 'root', // Senha do banco de dados
    database: 'sistema_escolar' // Nome do banco de dados 

})

// Exportar essa conexão para ser utilizada em outros arquivos(model)
module.exports = {
    conexao
}