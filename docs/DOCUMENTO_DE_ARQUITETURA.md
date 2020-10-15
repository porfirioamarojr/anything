<center>Documento Arquitetural</center>

## Introdução a Arquitetura MVVM

O padrão de projeto Model-View-ViewModel (MVVM) foi originalmente criado para aplicativos Windows Presentation Foundation (WPF) usando XAML para separar a interface do usuário (UI) da lógica de negócios e aproveitando ao máximo o data binding (a vinculação de dados).
Aplicações arquitetadas desta forma têm uma camada ViewModel distinta que não possui dependências de sua interface de usuário. Esta arquitetura em si é otimizada para testes de unidade, bem como para o desenvolvimento multiplataforma. Como as classes ViewModel de um aplicativo não têm dependências sobre a camada de interface do usuário, você pode facilmente trocar uma interface de usuário iOS por uma interface Android e escrever testes contra a camada ViewModel. O padrão MVVM é composto basicamente dos seguintes elementos:
**Model:** A camada de modelo é a lógica de negócios que impulsiona a aplicação e quaisquer objetos de negócios;
**View:** Esta camada é a interface do usuário. No caso do desenvolvimento cross platform, ela inclui qualquer código específico da plataforma para conduzir a interface do usuário da aplicação.
**ViewModel:** Esta camada age como a cola em aplicações MVVM. As camadas ViewModel coordenam as operações entre a view e as camadas model. Uma camada ViewModel irá conter propriedades que a View vai obter ou definir, e funções para cada operação que pode ser feita pelo usuário em cada view. A camada ViewModel também evocará operações sobre a camada Model, se necessário. É importante notar que a interação entre as camadas View e ViewModel é  tradicionalmente criada pela ligação de dados ou databinding. No entanto, o iOS e o Android não possuem um mecanismos de vinculação de dados embutidos, por isso a abordagem geral neste caso é feita manualmente chamando a camada ViewModel da camada View.
**Nota:** Você pode usar o Xamarin. Forms para criar aplicações nativas para iOS e Android e aproveitar o mecanismo de databinding embutido do Xamarin Forms. A seguir vou mostrar um exemplo de implementação do padrão MVVM bem simples para mostrar a sua atuação.

## Arquitetura do Vue JS

Aplicações que utilizam Vue são constituídas de componentes criados com a sintaxe HTML, CSS e Javascript em um único arquivo .vue, que facilitam o isolamento e a manutenção de funcionalidades. Cada componente constitui um escopo isolado dos demais, tanto em lógica quantos nos estilos. A renderização dos dados é feita baseada em uma virtual DOM que é atualizada apenas quando os dados de um componentes são alterados, aumentando o desempenho e descartando atualizações desnecessárias. Cada componente é criado usando a sintaxe HTML para estruturação com os dados atrelados via Javascript, o que supre as limitações do HTML como a capacidade de iterar sobre uma coleção de dados ou decidir se uma tag deve ser renderizada ou não.

## Ferramentas para Vue JS
Para otimizar o processo de desenvolvimento, Vue também proporciona uma interface CLI onde é possível executar diferentes funções comuns a projetos para front-end. 
Uma das funções mais conhecidas é o vue create <projeto> que é utilizado para iniciar um novo projeto pré-configurado com ferramentas comuns e indispensáveis, tais como: 
Babel – transpilador
* Typescript – tipagem estática
* Vuex – gerente de estados aplicação
* Router – gerente de rotas
* Eslint – formatador de código
* Jest – testes
Vue-cli também proporciona uma arquitetura de plugins onde é possível acoplar diferentes funcionalidades como análise de métricas, build otimizado e deploy a diferentes provedores.
Vue-devtools é outra ferramenta desenvolvida para facilitar o processo de desenvolvimento de aplicações que utilizam Vue JS, funciona como uma extensão do browser e serve para visualizar o estado de cada componente que está sendo renderizado. Esta função dá ao desenvolvedor a capacidade de debugar a aplicação de maneira rápida e visual.
Os editores de texto mais utilizados também proporcionam ferramentas para que a experiência de desenvolvimento com Vue seja a melhor possível, provendo syntax highlighting, snippets  e intelliSense. 
A extensão mais utilizada para essa funcionalidade é chamada Vetur que é utilizada juntamente com o VSCode que por opção foi o escolhido para o desenvolvimento do projeto, e para o atom tem o ide-vue.

## API Rest
Podemos pensar em APIs como uma ponte que liga duas ilhas, mas no caso de software, uma API pode ser usada por diversas áreas de negócio, não sendo necessário ao consumidor conhecer detalhes sobre sua implementação. Elas são interfaces de integração que facilitam a troca de informações entre n aplicações, nos permitindo ter até mesmo várias caras para uma única aplicação – uma versão móvel, outra desktop e uma web.

## O que é REST?
A sigla REST, em português, significa “Transferência de Estado Representacional”. Concebido como uma abstração da arquitetura da web, trata-se de um conjunto de princípios e definições necessários para a criação de um projeto com interfaces bem definidas. A utilização da arquitetura REST, portanto, permite a comunicação entre aplicações. Ao abrir o navegador, ele estabelece uma conexão TCP/IP com o servidor de destino e envia uma requisição GET HTTP, com o endereço buscado. O servidor, então, interpreta a requisição, retornando com uma resposta HTTP ao navegador. Essa resposta pode ser completa, com representações em formato HTML, ou apresentar erro, afirmando que o recurso solicitado não foi encontrado. Esse processo é repetido diversas vezes em um período de navegação. Cada nova URL aberta ou formulário submetido refaz as etapas que descrevemos. Dessa forma, esses elementos permitem a criação de aplicações web, desenhando a forma como navegamos na internet. Os Web Services que adotam REST são mais leves e perfeitos na busca da metodologia ágil. Outro diferencial é a flexibilidade, sendo possível escolher o formato que melhor se encaixa para as mensagens do sistema. Os mais utilizados, além do texto puro, são JSON e XML, dependendo da necessidade de cada momento.

## Sobre o JSON
JSON (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. Está baseado em um subconjunto da linguagem de programação JavaScript, Standard ECMA-262 3a Edição -Dezembro - 1999. JSON é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares às linguagens C e familiares, incluindo C++, C#, Java, JavaScript, Perl, Python e muitas outras. Estas propriedades fazem com que JSON seja um formato ideal de troca de dados.
JSON está constituído em duas estruturas:
Uma coleção de pares nome/valor. Em várias linguagens, isto é caracterizado como um object, record, struct, dicionário, hash table, keyed list, ou arrays associativas.
Uma lista ordenada de valores. Na maioria das linguagens, isto é caracterizado como uma array, vetor, lista ou sequência.
Estas são estruturas de dados universais. Virtualmente todas as linguagens de programação modernas as suportam, de uma forma ou de outra. É aceitável que um formato de troca de dados que seja independente de linguagem de programação se baseie em estruturas.

## Sobre o Node JS
Como um ambiente de execução JavaScript assíncrono orientado a eventos, o Node.js é projetado para desenvolvimento de aplicações escaláveis de rede. No exemplo a seguir, diversas conexões podem ser controladas ao mesmo tempo. Em cada conexão a função de callback é chamada. Mas, se não houver trabalho a ser realizado, o Node.js ficará inativo. Essa é uma alternativa que contrasta com o modelo de concorrência mais comum, onde são utilizadas threads do SO. Aplicações de rede baseadas em threads são relativamente ineficientes e difíceis de usar. Além disso, os usuários do Node.js não precisam se preocupar com deadlock de processos, pois não existem locks. Quase nenhuma função no Node.js realiza diretamente operações de E/S, por essa razão o processo nunca bloqueia. Por não existirem operações bloqueantes, sistemas escaláveis são razoavelmente fáceis de serem desenvolvidos em Node.js.
## Express JS
Express é um popular framework web estruturado, escrito em JavaScript que roda sobre o ambiente node.js em tempo de execução. Este módulo explica alguns dos principais benefícios deste framework, como configurar o seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.

Alguns pontos sobre o framework Express.js:
aplicativo
Em geral, um ou mais programas que são designados a executar operações com um propósito específico. No contexto do Express, um programa que usa a API do Express executando na plataforma. Pode também se referir a um objeto app.
API
Interface de programação de aplicativos. Especifique o significado da abreviação no seu primeiro uso.
Express
Uma estrutura web rápida, flexível e minimalista para aplicativos Node.js. Em geral, “Express” é preferido a “Express.js,” apesar de que o último ser aceitável.
libuv
Uma biblioteca de suporte multiplataforma que foca em E/S assíncrona, primeiramente desenvolvida para uso pelo Node.js.
middleware
Uma função que é chamada pela camada de roteamento do Express antes do manipulador final da solicitação, e assim ficando no meio, entre uma solicitação bruta a rota final desejada. Alguns poucos pontos de refinamento da terminologia envolvendo middleware:
var foo = require('middleware') é chamado requerendo ou usando um módulo do Node.js. Então a instrução var mw = foo() tipicamente retorna o middleware.
app.use(mw) é chamado incluindo o middleware na pilha global de processamento.
app.get('/foo', mw, function (req, res) { ... }) é chamado *incluindo o middleware para a pilha de processamento do “GET /foo” *.
Node.js
Uma plataforma de software que é usada para construir aplicativos de rede escaláveis. O Node.js usa o JavaScript como linguagem de script, e alcança rendimentos altos através de E/S não bloqueante e um loop de eventos de thread única. Consulte nodejs.org. Nota de uso: Inicialmente, “Node.js,” posteriormente “Node”.
open-source, open source
Quando usado como adjetivo, colocar o hífen; por exemplo “Este é um software open-source”. Consulte Software Open-source na Wikipedia. Nota: Apesar de ser comum não colocar o hífen neste termo, estamos usando as regras padrões do Inglês para colocar o hífen em adjetivos compostos.
resposta
Uma resposta HTTP. Um servidor retorna uma mensagem de resposta HTTP para o cliente. A resposta contém informações do status de conclusão sobre a solicitação e pode também conter conteúdo da solicitação no corpo da mensagem.
rota
Parte de uma URL que identifica um recurso. Por exemplo, em http://foo.com/products/id, “/products/id” é a rota.
roteador
Consulte roteador na referência da API.
solicitação
Uma solicitação HTTP. Um cliente envia uma mensagem HTTP para um servidor, que retorna uma resposta. A solicitação deve usar um dos vários métodos de solicitação como GET, POST, e assim por diante.

## Banco de Dados
Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados. Os dados nos tipos mais comuns de bancos de dados em operação atualmente são modelados em linhas e colunas em uma série de tabelas para tornar o processamento e a consulta de dados eficientes. Os dados podem ser facilmente acessados, gerenciados, modificados, atualizados, controlados e organizados. A maioria dos bancos de dados usa a linguagem de consulta estruturada (SQL) para escrever e consultar dados.

## SGBD PostgreSQL
O PostgreSQL é um sistema de gerenciamento de banco de dados objeto-relacional (SGBDOR) [1] baseado no POSTGRES Versão 4.2 desenvolvido pelo Departamento de Ciência da Computação da Universidade da Califórnia em Berkeley. O POSTGRES foi pioneiro em vários conceitos que somente se tornaram disponíveis muito mais tarde em alguns sistemas de banco de dados comerciais.
O PostgreSQL é um descendente de código fonte aberto deste código original de Berkeley, que suporta grande parte do padrão SQL e oferece muitas funcionalidades modernas, como:
comandos complexos
chaves estrangeiras
gatilhos
visões
integridade transacional
controle de simultaneidade multiversão
Além disso, o PostgreSQL pode ser ampliado pelo usuário de muitas maneiras como, por exemplo, adicionando novos
tipos de dado
funções
operadores
funções de agregação
métodos de índice
linguagens procedurais
Devido à sua licença liberal, o PostgreSQL pode ser utilizado, modificado e distribuído por qualquer pessoa para qualquer finalidade, seja particular, comercial ou acadêmica, livre de encargos.
[1]
Um banco de dados objeto-relacional (ORD), ou sistema de gerenciamento de banco de dados objeto-relacional (ORDBMS ou SGBDOR) é um sistema de gerenciamento de banco de dados relacional que permite aos desenvolvedores integrar ao banco de dados seus próprios tipos de dado e métodos personalizados. Muitas idéias dos primeiros esforços para bancos de dados objeto-relacionais foram amplamente adicionadas ao SQL:1999. Na verdade, todo produto que adere aos aspectos orientados a objeto do SQL:1999 pode ser descrito como um produto de gerenciamento de banco de dados objeto-relacional. Por exemplo, o DB2 da IBM, o Oracle e o SQL Server da Microsoft declaram suportar esta tecnologia com graus variados de sucesso. — Object-relational database

## Conclusão
Tendo em vista as explicações acima isto é um pequeno apurado do que utilizaremos, tendo visto o Vue JS como framework para criar a casca no padrão MVVM que iremos utilizar no sistema, e também faremos o uso de uma API Rest utilizando o JSON, o Express JS, e o Node JS para construir e consumir com o nosso esqueleto do vue e inserir os dados no Banco de Dados, construído e padronizado através do SGBD PostgreSQL.

