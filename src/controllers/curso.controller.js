function listarCursos(request, response) {
response.send("Função responsavel pela listagem")
}

function criarCursos(request,response){
    response.send("Função responsável por cadastrar um curso")
}

function deletarCursos(request,response){
    response.send("Função responsável por deletar um curso")
}
function atualizarCursos(request,response){
    response.send("Função responsável por atualizar um curso")
}


module.exports = {
    listarCursos,
    criarCursos,
    deletarCursos,
    atualizarCursos
}

