# Relatório de Testes de Módulo/Sistema
## Responsabilidade do Testador

**Legenda**  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Teste** : Código ou identificação do Teste.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Descrição**: Descrição dos passos e detalhes do teste a ser executado.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Especificação**: Informações sobre a função testada e se ela de acordo com a especificação do caso de uso.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Resultado**: Resultado do teste, modificações sugeridas ou resultados do teste. No caso de erro ou problema na execução do teste descrever o erro em detalhes e adicionar print's das telas.

#### US000 – Cadastro dados Pessoais do Usuário  
|  teste | Descrição  |  Especificação | Resultado |
|---|---|---|---|
| Teste 01: Incluir Produto  | A1 - Cadastrar usuário	A1.1. O usuario preenche os dados; A1.2. O usuario seleciona a opção Cadastrar; A1.3. O sistema salva os dados; A1.4. O sistema exibe uma mensagem de acordo com a interação correta/incorreta; A1.5. Fim do fluxo. (P2)|A função implementada não segue os passos A1.4. A implementação não está de acordo com a especificação do CDU|Ainda não há conexão com o banco, dessa forma, o teste A1.3 não foram possíveis; os demais estão de acordo |
| Teste 02: Alterar Dados Usuario  |A2 – Alterar dados usuário A2.1 - O usuario seleciona os dados para serem alterados A2.2 - O usuario edita os campos e clica no botão Editar; A2.4 - O sistema salva os 	dados alterados no banco de dados; A2.5 - O sistema exibe uma mensagem de acordo com a interação correta/incorreta. 2.6 - Fim do fluxo. (P2)| A função não implementa o passo A2.4, ou seja não altera o Produto. Na execução da função aparece uma mensagem sobre a regra de negócio RN001 que não aparece na especificação.| |

**Relatório de Bugs e Providências**
Responsabilidade do Gerente

| Teste | Providência  |  Tarefas/Tipo | 
|---|---|---|
| Teste 01 – Conectar ao Banco de Dados	  | Conectar sistema ao Banco de dados  | Tarefa: conectar sistema ao Banco de Dados.  | 