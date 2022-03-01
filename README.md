# Microsserviço para autenticação de usuários

Este projeto foi desenvolvido durante o módulo de NodeJS do bootcamp **Banco Inter**, uma parceria entre **Digital Innovation One** e **Banco Inter**

O projeto consiste em um micro serviço de autenticação de usuários utilizando token jwt.

## Rotas

### **Usuários**

```
GET /users

GET /users/:uuid

POST /users

PUT /users/:uuid

DELETE /users/:uuid
```

### **Autenticação**

```
POST /token

POST /token/validate
```

## Ferramentas

[typescript](https://www.typescriptlang.org/)

[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

[express](https://expressjs.com/)

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

[dotenv](https://www.npmjs.com/package/dotenv)

[node-postgres-pg](https://node-postgres.com/)
