'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// ROTAS PARA AS VIEWS
Route.on('/').render('login')
Route.on('/login').render('login')
Route.on('/pag/principal').render('pag/principal')
Route.on('/pag/cadastroEPl').render('pag/cadastroEPl')
Route.on('/pag/cadastroSetor').render('pag/cadastroSetor')
Route.on('/pag/leitor').render('pag/leitor')
Route.on('/pag/requisicao').render('pag/requisicao')
Route.on('/pag/itemrequisicao').render('pag/itemrequisicao')


// rotas para as API

Route.post('/login','SessionController.store')

Route.post('/epi','EpiController.store')
Route.get('/epi','EpiController.index')
Route.put('/epi/:id','EpiController.update')
Route.get('/epi/:id','EpiController.show')
Route.delete('/epi/:id','EpiController.destroy')

//Route.post('/departamento','DepartamentoController.store')
Route.get('/departamento','DepartamentoController.index')
//Route.put('/departamento/:Codigo','DepartamentoController.update')
Route.get('/departamento/:Codigo','DepartamentoController.show')

Route.post('/setor','SetoresController.store')
Route.get('/setor','SetoresController.index')
Route.put('/setor/:id','SetoresController.update')
Route.get('/setor/:id','SetoresController.show')
Route.delete('/setor/:id','SetoresController.destroy')

Route.get('/funcao','FuncoesCargosController.index')

Route.post('/epidepartamento','EpisDepartamentoController.store')
Route.get('/epidepartamento','EpisDepartamentoController.index')
Route.get('/epidepartamento/:id','EpisDepartamentoController.show')
Route.put('/epidepartamento','EpisDepartamentoController.update')
Route.delete('/epidepartamento/:id','EpisDepartamentoController.destroy')

Route.get('/funcionario','FuncionarioController.index')

// PARTE DO CORPO DA REQUISICAO DO EPI
Route.post('/requisicao','RequisicaoController.store')
Route.get('/requisicao','RequisicaoController.index')
Route.get('/requisicao/:id','RequisicaoController.show')
Route.put('/requisicao/:id','RequisicaoController.update')
Route.delete('/requisicao/:id','RequisicaoController.destroy')

// PARTE DOS ITENS DA REQUISICAO DO EPI
Route.post('/itemrequisicao','ItemRequisicaoController.store')
Route.get('/itemrequisicao/:id','ItemRequisicaoController.show')

// ROTA CORINGA PARA MOSTRAR CASO NAO ENCONTRE AS DEMAIS
Route.on('*').render('pag/404')
