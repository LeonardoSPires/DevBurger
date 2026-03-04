🍔 DevBurger API

API REST do projeto DevBurger, responsável por autenticação, gerenciamento de produtos, categorias, pedidos e integração com pagamento.

Esta API foi desenvolvida utilizando boas práticas de arquitetura, autenticação com JWT, integração com gateway de pagamento e containerização com Docker.

🚀 Tecnologias Utilizadas

Node.js

Express

Sequelize

PostgreSQL

JWT (JSON Web Token)

Multer (Upload de imagens)

Stripe (Integração de pagamento)

Docker

Nodemon

📂 Estrutura do Projeto
src
 ├── app
 │   ├── controllers
 │   ├── middlewares
 │   ├── models
 │
 ├── config
 ├── database
 │   ├── migrations
 │   ├── seeders
 │
 ├── app.js
 ├── routes.js
 └── server.js

uploads
.gitignore
.sequelizerc
docker-compose.yml
nodemon.json
package-lock.json
package.json
yarn.lock
🔐 Funcionalidades

✅ Cadastro de usuários

✅ Login com autenticação JWT

✅ Middleware de proteção de rotas

✅ CRUD completo de Produtos

✅ CRUD completo de Categorias

✅ CRUD completo de Pedidos

✅ Upload de imagens com Multer

✅ Integração com Stripe (Payment Intent)

✅ Estrutura pronta para produção

🐳 Executando com Docker (Recomendado)
1️⃣ Subir os containers
docker-compose up -d

Isso iniciará:

Banco PostgreSQL

API Node.js

2️⃣ Rodar migrations
npx sequelize db:migrate
3️⃣ Iniciar servidor
npm run dev

Servidor disponível em:

http://localhost:3000
⚙️ Executando sem Docker
1️⃣ Instalar dependências
npm install

ou

yarn
2️⃣ Criar arquivo .env

Crie um arquivo .env na raiz do projeto:

DATABASE_URL=
JWT_SECRET=
STRIPE_SECRET_KEY=

⚠️ Nunca subir o arquivo .env para o GitHub.

3️⃣ Rodar migrations
npx sequelize db:migrate
4️⃣ Iniciar servidor
npm run dev
🔑 Principais Rotas
👤 Usuários

POST /users

🔐 Login

POST /sessions

🍔 Produtos

POST /products

GET /products

PUT /products/:id

🏷 Categorias

POST /categories

GET /categories

PUT /categories/:id

🧾 Pedidos

POST /orders

GET /orders

PUT /orders/:id

DELETE /orders/:id

💳 Pagamento

POST /create-payment-intent

📦 Upload de Arquivos

Os arquivos enviados são armazenados na pasta:

/uploads
🛡️ Segurança

Autenticação via JWT

Proteção de rotas com middleware

Variáveis sensíveis protegidas via .env

Histórico Git limpo (sem exposição de secrets)

.gitignore configurado corretamente

🧠 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Prática de backend com Node.js

Arquitetura organizada e escalável

Integração com gateway de pagamento

Utilização de Docker

Boas práticas de versionamento

👨‍💻 Autor

Leonardo Pires
Desenvolvedor Web
