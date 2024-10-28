# Visão Geral

Este projeto para gerenciar transações financeiras, incluindo as funcionalidades de listar, adicionar, editar e deletar transações.

## Tecnologias Utilizadas

 - **Frontend**: Angular e CSS para estilização.
 - **Backend**: Laravel 11 com PHP 8.2.
 - **Banco de Dados**: MySql.

## Estrutura do Projeto

## Backend

O backend foi desenvolvido com Laravel 11, utilizando PHP 8.2.

### Componentes

Formulário para adicionar ou editar transações.
Lista com todas as transações e opções para editar e deletar.

### Frontend

A parte da estilização foi feita usando Angular 18 e CSS.

### Componentes

 - **TransacaoFormComponent**: Formulário para adicionar transações.
 - **TransacaoEditComponent**: Formulário para editar transações.
 - **TransacaoListComponent**: Lista todas as transações com opções para editar e excluir.

### Serviços

 - **TransacaoService**: Gerencia a comunicação com a API.

### Roteamento
 - **HomeComponent**: Página inicial com rota que leva para Lista.
 - **TransacaoFormComponent**: Rota para criar transação.
 - **TransacaoEditComponent**: Rota para editar transação com base no ID.
 - **TransacaoListComponent**: Rota para listar todas as transações.

## Banco de Dados

O banco de dados MySql é utilizado para armazenar as todas as informações das transações.

### Estrutura do Banco de Dados

 - **Tabela transacaos**: Armazena o ID, NOME, DATA, TIPO, CATEGORIA e VALOR das transações.

## Configuração do Ambiente

1. **Frontend:**
   - Instale as dependências: `npm install`
   - Inicie o servidor do Angular: `ng serve`

2. **Backend:**
   - Configure o ambiente: `.env`
   - Crie a tabela do banco de dados pelo php: `php artisan make:model Transacaos -m`
   - Execute as migrações: `php artisan migrate`
   - Inicie o servidor do Laravel: `php artisan serve`

3. **Banco de Dados:**
   - Certifique-se de que o MySql está em execução.
   - Crie o banco de dados `create database if not exists db_transacoes`.
   - Configure o acesso ao banco de dados no arquivo `.env` do Laravel.

## Instruções de Uso

 - Iniciar o servidor do Laravel `php artisan serve`
 - Inicie o servidor do Angular: `ng serve` 
 - No navegador de sua preferência acesse `http://localhost:4200/transacoes/criar`.
 - No formulário de cadastro das transações preencha os campos necessários.
 - Utilize o botão de ir para lista para ver as transações cadastradas.
 - Na página de lista você poderá usar as ações de editar ou deletar as transações.