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

   test('acessa a rota /cadastro e cria um usuario', async () => {
      const response = await request(server).post('/cadastro_concluido').send({
         cpf:'55222',
         nome:'Guilherme',
         email:'guilherme@gmail.com',
         sexo:'masculino',
         senha:'guilherme123',
         telefone:'0800'});
      expect(response.status).toEqual(200);
      expect(response.text).toContain('');
      
   });

   test('alterar usuario cadastrado', async () => {
 
      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });
      const response = await request(server).post('/meus_dados').send({
         cpfVerifica: '55222',
         cpf:'55222',
         nome:'Guilherme',
         email:'guilherme@gmail.com',
         sexo:'masculino',
         senha:'guilherme123',
         telefone:'2400'});
      expect(response.status).toEqual(200);
      expect(response.text).toContain('');
      
   });

   test('Alterar endereco', async () => {
      const response = await request(server).post('/meu_endereco').send({
         cpfVerifica: '55222',
         rua: 'Parque das Acassias',
         cidade: 'São Paulo',
         cep: '590000',
         numero: '55',
         bairro: 'Centro',
         referencia: 'Nenhuma'
      });
   });

   test('Criando loja', async () => {
   
      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });
      const response = await request(server).post('/comercio-v').send({
         
         cpf:'55222',
         cnpj:'777666',
         nomeLoja:'Edison',
         descricao:'loja'});
      expect(response.status).toEqual(200);
      expect(response.text).toContain('');
      
   });

   test('Alterar Dados Loja', async () => {

      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });

      const response = await request(server).post('/set-loja').send({
         cnpj:'777666',
         nomeLoja:'Edison2',
         descricao:'Descricao teste'
      });
   });

   test('Adicionar Produto', async () => {
      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });
      const response = await request(server).post('/comercio-p').send({
         cpfDono:'55222',
         valor:'77',
         nome:'Enxoval',
         descricaoProduto:'Descricao Teste'
      });
   });

   test('Editar Produto', async () => {

      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });

      const response = await request(server).post('/edit-produto').send({
         id:'8',
         nomeProduto: 'Ventilador',
         valorProduto:'55',
         descricaoProduto:'Nenhuma'
      });
   });

   test('Deletar Produto', async () => {
      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });
      const response = await request(server).post('/del-produto').send({
         id:'8',
      });
   });

   test('Deletar Loja', async () => {
      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });
      const response = await request(server).get('/del-loja');
   });

   test('deletar usuario cadastrado', async () => {

      const responseL = await request(server).post('/login-v').send({
         email:'guilherme@gmail.com',
         senha:'guilherme123'
      });
      const response = await request(server).get('/del-usuario');
      
   });


});