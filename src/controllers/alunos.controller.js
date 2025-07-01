function listarAluno(request, response) {
response.send("Função responsavel pela listagem")
}

function criarAluno(request,response){
    response.send("Função responsável por criar um alunos")
}

function deletarAluno(request,response){
    response.send("Função responsável por deletar um alunos")
}
function atualizarAluno(request,response){
    response.send("Função responsável por atualizar um alunos")
}


module.exports = {
   listarAluno,
   criarAluno,
   deletarAluno,
   atualizarAluno
}
