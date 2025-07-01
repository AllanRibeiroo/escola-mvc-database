function listarProfessor(request, response) {
response.send("Função responsavel pela listagem")
}

function criarProfessor(request,response){
    response.send("Função responsável por criar um professor")
}

function deletarProfessor(request,response){
    response.send("Função responsável por deletar um professor")
}
function atualizarProfessor(request,response){
    response.send("Função responsável por atualizar um professor")
}


module.exports = {
   listarProfessor,
   criarProfessor,
   deletarProfessor,
   atualizarProfessor
}
