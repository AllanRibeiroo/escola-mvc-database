// Importando o modulo de express
const express = require ('express')

// Importação dos controllers
const cursoControllers = require ('./controllers/curso.controller')
const alunoControtllers = require ('./controllers/alunos.controller')
const professorControllers = require ('./controllers/professor.controller')

// Criando uma instancia do express
const app = express()

// Criar uma rota
app.get('/cursos', cursoControllers.listarCursos)
app.post('/criar-curso', cursoControllers.criarCursos)
app.put('/atualizar-curso', cursoControllers.atualizarCursos)
app.delete('/deletar-curso', cursoControllers.deletarCursos)

app.get('/professores',professorControllers.listarProfessor)
app.post('/criar-professores',professorControllers.criarProfessor)
app.put('/atualizar-professores', professorControllers.atualizarProfessor)
app.delete('/deletar-professores',professorControllers.deletarProfessor)

app.get('/alunos', alunoControtllers.listarAluno)
app.post('/criar-alunos', alunoControtllers.criarAluno)
app.put('/atualizar-alunos', alunoControtllers.atualizarAluno)
app.delete('/deletar-alunos', alunoControtllers.deletarAluno)

// Iniciando o servidor na porta 3000
app.listen(3000, function(){
    console.log("Servidor ONN na porta 3000")
})
