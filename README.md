# CV Maker

Este projeto é uma API que registra usuários, autentica suas identidades e gera um token para permitir acesso e modificação de seus dados. Além disso, a API é capaz de gerar um arquivo PDF contendo o currículo do usuário.

## Desafio

O desafio é criar uma API em Node.js e TypeScript usando o framework Express, juntamente com o ORM Prisma e o banco de dados PostgreSQL. O foco principal é criar funcionalidades para registro de usuários, autenticação segura e geração de currículos em formato PDF.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL

## Funcionalidades Principais

- Registro de usuários com informações necessárias.
- Autenticação de usuários e geração de tokens de acesso.
- Armazenamento de dados do currículo em um endpoint dedicado.
- Geração de currículos em formato PDF através de um endpoint especifico a partir dos dados do usuário da sessão.

## Estrutura do Projeto

A estrutura vai incluir diretórios como controllers, service, utils ,banco de dados(bd), rotas(routes) garantindo uma arquitetura limpa e modular. A configuração do TypeScript e do Docker é provida para facilitar o desenvolvimento e a implantação. Tão quanto meu estudo nas tecnologias(Typescript - Superset e Docker - gerenciador de containers)

## Dependências

A API utiliza várias dependências para facilitar o desenvolvimento e garantir a segurança e confiabilidade do projeto. Abaixo estão algumas das principais dependências utilizadas:

- **Express** - Um framework web rápido, flexível e minimalista para Node.js.
- **Body-parser** - Middleware de análise de corpo para Node.js, usado para analisar corpos de solicitações HTTP.
- **Cors** - Um middleware para o Express que simplifica a adição de cabeçalhos necessários para permitir solicitações CORS (Cross-Origin Resource Sharing).
- **Express-rate-limit** - Um middleware para limitar as taxas de solicitação HTTP para o Express.
- **Helmet** - Um middleware para o Express que ajuda a proteger aplicativos Express configurando vários cabeçalhos HTTP.
- **Ts-dotenv** - Uma biblioteca para carregar variáveis de ambiente de um arquivo .env em Node.js e TypeScript.

Além dessas, existem outras dependências como `@types/cors`, `@types/dotenv`, `@types/express`, `@types/node` que são tipos TypeScript para bibliotecas JavaScript, ajudando no desenvolvimento com TypeScript. O projeto também utiliza ferramentas como `nodemon` para reiniciar automaticamente o servidor quando houver alterações no código e `eslint` para ajudar a manter um código limpo e consistente.

Para uma lista completa de dependências e versões específicas, consulte o arquivo `package.json`.

## Contribuições

Este é um projeto pessoal e não são aceita contribuições.
