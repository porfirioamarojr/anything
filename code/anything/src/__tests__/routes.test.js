//importa os módulos e aqruivos necessários
const request = require('supertest');
const server = require('../app.js');
const sayTDD = require('../helloJest');

//o que será executado antes de todos os testes
beforeAll(async () => {
   console.log('Iniciando TDD com jest!');
});

//o que será executado após todos os testes
afterAll(() => {
   //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
    server.close();
    console.log('servidor fechado');
});


describe('inicio dos testes', () => {
   //descrição do caso de testes
   test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
      //qual a rota que ele deve acessar e qual requisição deve fazer
      const response = await request(server).get('/login');
      //qual o status esperado 
      expect(response.status).toEqual(200);
      //se todos esses passos passarem, verifica o conteúdo exibido dentro desta rota
      expect(response.text).toContain('<label id="cadastro">Login</label>');
      
   });

   test('acessa a rota /tdd e então será apresentada a seguinte defiição de tdd:', async () => {
      
      const responseL = await request(server).post('/login-v').send({
         email:'geralcina@gmail.com',
         senha:'123'
      });

      const response = await request(server).post('/comercio-v').send({
         
         cpf:'123',
         cnpj:'321',
         nomeLoja:'Edison',
         descricao:'loja'});

      expect(response.status).toEqual(200);
      expect(response.text).toContain('');
      
   });

   test('irá verificar o retorno da função saytdd', () => {
      //é esperado que o retorno da função saytdd seja:
      expect(sayTDD()).toMatch('TDD é o Desenvolvimento Orientado por Testes');
      
   });
});