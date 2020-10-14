# Código do Modelo Conceitual gerado a partir do yUML
```
[PRODUTO | idProduto; nome; valor; descricao]<>*-1>[CARRINHO | idVenda; total; produto]
[CARRINHO | idVenda; total; produto]<>1-1>[PAGAMENTO | idPagamento; desconto; total]
[PAGAMENTO | idPagamento; desconto; total]++*-1>[CARTÃO | numeroCartao; data; nomeCartao; cpf]
[CARRINHO | idVenda; total; produto]++1-1>[CONTA | cpf; email; senha; nome; sexo; dataNascimento; telefone; endereco]
[CONTA | cpf; email; senha; nome; sexo; dataNascimento; telefone; endereco]++*-*>[VENDEDOR | cpf; cnpj]
[VENDEDOR | cpf; cnpj]++1-*>[PRODUTO | idProduto; nome; valor; descricao]
[VENDEDOR | cpf; cnpj]++1-*>[LOJA | cnpj; nomeLoja; descricao]
[LOJA | cnpj; nomeLoja; descricao]++1-*>[PRODUTO | idProduto; nome; valor; descricao]
[ENDEREÇO | rua; cidade; cep; numero; bairro; referencia]++1-1>[CONTA | cpf; email; senha; nome; sexo; dataNascimento; telefone; endereco]
[CONTA | cpf; email; senha; nome; sexo; dataNascimento; telefone; endereco]++1-1>[ADMINISTRADOR | cpf]
[CONTA | cpf; email; senha; nome; sexo; dataNascimento; telefone; endereco]++*-*>[CLIENTE | cpf; cartao]
[CARTÃO | numeroCartao; data; nomeCartao; cpf]<>1-1>[CLIENTE | cpf; cartao]
```
