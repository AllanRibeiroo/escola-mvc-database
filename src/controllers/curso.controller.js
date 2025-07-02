// Importar o model de cursos
const cursomodel = require ("../models/curso.model")


 async function listarCursos(request, response) {
    // Chamar a função listarTodosCursos do model 
    const cursos = await cursomodel.listarTodosCursos()

    response.json(cursos)
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

