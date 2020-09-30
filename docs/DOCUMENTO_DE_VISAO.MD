# Anything
## Introdução
### Propósito do documento de requisitos 
O documento de visão define o escopo de alto nível e o propósito de um programa, produto ou projeto. Uma instrução clara do problema, solução proposta e os recursos de alto nível do produto ajudam a estabelecer expectativas e a reduzir riscos. Este tópico fornece uma estrutura de tópicos de conteúdo potencial para o documento de visão.
Consulte Desenvolvendo uma Visão para obter uma explicação de como o proprietário do produto ou o analista de negócios trabalha com as partes interessadas para desenvolver um documento de visão. Este tópico, que faz parte da orientação do cenário Collaborative Lifecycle Management, descreve o processo do desenvolvimento da visão. Este tópico descreve o conteúdo típico para o documento. É possível copiar esta estrutura de tópicos e colá-la em um novo documento, e usá-la como a base para seu documento de visão. Use as partes desta estrutura de tópicos que são relevantes para seu projeto.

### Escopo do produto 
O sistema a ser desenvolvido será composto seguindo padrões de modelo web para exibição e compra de produtos on-line. Ele será basicamente um E-COMMERCE que venderá produtos fabricados e produzidos por pequenos produtores da região do Seridó no Rio Grande do Norte, pensando em divulgar assim os produtos locais para o Brasil e o mundo.

## Descrição geral
### Requisitos funcionais
|  CÓD 	|   REQUISITO	| DESCRIÇÃO | PRIORIDADE
|---	|---	|---  |--- |
|  RF001 	|  Cadastro de Produtos | No cadastro de produtos será obrigatório o preenchimento dos seguintes campos: nome e preço e terá outra tabela associada à ela chamada “detalhes” que conterá a quantidade, tamanho e cor dos produtos. | Alta |
| RF002 | Cadastro de Clientes | No cadastro de clientes será obrigatório o preenchimento dos seguintes campos: CPF, nome completo, nome da mãe, data de nascimento, endereço (rua, bairro e cidade (chave estrangeira da tabela Cidades)), e telefone.  | Alta |
| RF003 | Cadastro de Cidades | No cadastro de cidades será obrigatório o preenchimento dos seguintes campos: nome e estado. | Média | 
| RF004 |  Cadastro de Revendedores |  No cadastro de revendedoras será obrigatório o preenchimento dos seguintes campos: CPF, nome completo, data de nascimento, endereço (rua, bairro, CEP e cidade (chave estrangeira da tabela Cidades)) e telefone. | Baixa |
| RF005 | Cadastro de Fornecedores | No cadastro de fornecedores será obrigatório o preenchimento dos seguintes campos: nome, telefone, CNPJ ou CPF e endereço (rua, bairro, CEP e cidade (chave estrangeira da tabela Cidades)). | Alta |
| RF006 | Cadastro de Fornecedores | No momento de efetuar qualquer cadastro o sistema irá gerar automaticamente um código. Este será seu identificador o qual será utilizado para acesso a suas informações e, no caso de produtos, para sua identificação no momento da realização de uma venda.  | Alta |
| RF007 | Realização de Vendas  | O sistema permitirá fazer vendas condicionais gerando código para os mesmos, que posteriormente podem ser recuperados e passarem para venda fechada. | Alta |
| RF008 | Realização de Vendas  | Em qualquer tipo de venda será obrigatório o preenchimento do cliente que está realizando a compra, o vendedor e o tipo da venda. | Alta |
| RF009 | Realização de Vendas  | No momento de efetuar alguma venda será necessário selecionar produtos. O sistema permitirá selecionar somente produtos que estejam em estoque e disponíveis para venda e a quantidade disponível em estoque. | Alta |
| RF010 | Realização de Vendas  | Cada venda terá um atributo chamado “tipo_venda”, onde será possível identificar se a venda é um orçamento ou se é uma venda condicional.  | Alta |
| RF011 | Realização de Vendas  | Para vendas condicionais que não tiverem sido canceladas, será possível recuperá-las para a conferência dos produtos e a mesma poderá ser tornar uma venda fechada. Para fechar essa venda e serem geradas as prestações da mesma, será necessário apenas excluir as mercadorias devolvidas e finalizar com as mercadorias que o cliente quiser ficar. | Alta |
| RF012 | Realização de Vendas  | Para recuperar alguma venda condicional será necessário informar apenas o CPF do cliente.  | Alta |
| RF013 | Realização de Vendas  | Após qualquer venda ser fechada o valor da venda será agregado ao valor de vendas efetuadas pelo vendedor da venda e será agregado ao valor todal das vendas realizadas pela empresa | Alta |
| RF014 | Realização de Vendas  | Ao ser finalizada uma venda, o(s) produto(s) vendido(s) deverá(ão) ficar indisponível para a venda e o mesmo será decrementado do valor total de unidades disponíveis.  | Alta |
| RF015 | Cálculo das Parcelas   | O sistema irá gerar automaticamente o valor das parcelas para o vendedor, sendo necessário apenas informar o(s) produto(s), data de vencimento, se será feito com ou sem entrada e o valor da entrada  | Media |
| RF015 | Cálculo das Parcelas  | Será permitido, dentro do valor estipulado para os vendedores, descontos no momento da realização da venda.  | Media |
| RF016 | Controle de Caixa   | Ao ser paga uma prestação por um cliente a mesma entrará como entrada no dia correspondente a efetivação do pagamento. | Media |
| RF017 | Controle de Caixa | Poderá ser calculado no final de cada dia o lucro da empresa. | Media |

### Requisitos não-funcionais
|  CÓD 	|   REQUISITO	| DESCRIÇÃO 
|---	|---	|---  |
|RNF001| Geral | O sistema deve ter uma inteface simples e com soluções intuitivas. |
|RNF002| Geral |  As informações serão armazenadas em um Banco de Dados.  |
|RNF003| Acesso ao Sistema |  O sistema poderá ser acessado somente pelo administrador do sistema e pelos vendedores devidamente cadastradas no sistema |
|RNF004|  Acesso ao Sistema | O acesso ao sistema se dará pela informação de usuário e senha |
|RNF005| Permissões do Sistema | O administrador do sistema terá acesso à todas as áreas do sistema, com permissão de leitura, exclusão, inclusão e alteração. |
|RNF006| Permissões do Sistema: Vendedores | Permissão para realizar todos os tipos de cadastros, alterações e exclusões nos mesmos |
|RNF007|  Permissões do Sistema: Vendedores | Permissão para realizar vendas condicionais tanto de clientes da loja como dos vendedores externas |
|RNF008|  Permissões do Sistema: Vendedores | Permissão para efetuar pagamentos de prestações de clientes|
|RNF009|  Permissões do Sistema: Vendedores | Permissão para consultar produtos e seu estoque|
|RNF010|  Permissões do Sistema: Vendedores |Não tem permissão para fazer nenhum tipo de consulta referentes as vendas da empresa, vendas dos vendedores, das comissões e ao caixa|
|RNF011|  Permissões do Sistema: Vendedores | Não é permitido fazer nenhum tipo de lançamento no caixa|
|RNF012|  Permissões do Sistema: Vendedores | Permissão para concluir vendas no sistema|

### Perfis dos usuários (características dos usuários)
### Riscos
### Suposições e dependências
### Perspectiva do produto (dá uma visão geral de como o produto funcionará. Pode ser um protótipo de telas feito a mão ou não)
