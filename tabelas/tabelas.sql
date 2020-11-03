
create table Conta(
	cpf varchar(14),
	email varchar(30),
	senha varchar(30),
	nome varchar(30),
	sexo varchar(10),
	dataNascimento date,
	telefone integer,
	constraint pk_conta primary key (cpf)
);

create table Cliente(
	cpf varchar(14),
	constraint pk_cliente primary key (cpf),
	constraint fk_cliente foreign key (cpf) references Conta(cpf)
);

create table Endereco(
	endereco_cliente_cpf varchar,
	rua varchar(50),
	cidade varchar(50),
	cep integer,
	numero integer,
	bairro varchar(20),
	referencia varchar(100),
	constraint pk_endereco primary key (endereco_cliente_cpf),
	constraint fk_endereco foreign key (endereco_cliente_cpf) references Conta(cpf)
);

create table Cartao(
	cpfCliente varchar,
	numeroCartao varchar(16),
	dataCartao Date,
	nomeCartao varchar(30),
	constraint pk_cartao primary key (cpfCliente),
	constraint fk_cartao foreign key (cpfCliente) references Cliente(cpf)
);




